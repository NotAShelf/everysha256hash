"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const HashPage = () => {
  const params = useParams();
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    if (params?.hash) {
      setHash(params.hash as string);
    }
  }, [params]);

  return (
    <div className="container">
      {hash ? (
        <div>
          <h1>Hash: {hash}</h1>
          <button onClick={() => navigator.clipboard.writeText(hash)}>
            Copy Hash
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HashPage;
