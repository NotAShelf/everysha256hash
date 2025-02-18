"use client";
import { FC, useState, useEffect, useRef } from "react";
import HashList from "../components/HashList";

const Home: FC = () => {
  const [hashes, setHashes] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [start, setStart] = useState<number>(0);

  const fetchHashes = async (start: number, count: number = 100) => {
    try {
      const response = await fetch(
        `/api/generate-hashes?start=${start}&count=${count}`,
      );
      const data = await response.json();
      if (!Array.isArray(data)) {
        console.error("Unexpected API response:", data);
        return [];
      }
      return data;
    } catch (error) {
      console.error("Error fetching hashes:", error);
      return [];
    }
  };

  // load more hashes when reaching the bottom
  const observer = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadHashes = async () => {
      if (loading) return;
      setLoading(true);
      const newHashes = await fetchHashes(start);
      setHashes((prev) => [...prev, ...newHashes]); // append new hashes
      setLoading(false);
    };

    loadHashes();

    if (loadMoreRef.current) {
      observer.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !loading) {
            setStart((prevStart) => prevStart + 100); // increment start
          }
        },
        { threshold: 1.0 },
      );

      observer.current.observe(loadMoreRef.current);
    }

    return () => observer.current?.disconnect();
  }, [start, loading]);

  return (
    <div className="container">
      <HashList hashes={hashes} />
      <div ref={loadMoreRef} style={{ height: "20px" }}></div>
      {loading && <p>Loading more hashes...</p>}
    </div>
  );
};

export default Home;
