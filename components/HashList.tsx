"use client";
import { FC, useState } from "react";
import { FaClipboard } from "react-icons/fa";

interface HashListProps {
  hashes: string[];
}

const HashList: FC<HashListProps> = ({ hashes }) => {
  const [copiedHash, setCopiedHash] = useState<string | null>(null);

  const copyToClipboard = (hash: string) => {
    navigator.clipboard.writeText(hash).then(() => {
      setCopiedHash(hash);
      setTimeout(() => setCopiedHash(null), 1200);
    });
  };

  return (
    <div className="hash-list">
      {hashes.map((hash, index) => (
        <div
          className="hash-item"
          key={index}
          onClick={() => copyToClipboard(hash)}
        >
          <span>{hash}</span>
          <FaClipboard style={{ marginLeft: "8px", cursor: "pointer" }} />
          {copiedHash === hash && (
            <span
              style={{ marginLeft: "10px", color: "green", fontSize: "0.9em" }}
            >
              Copied!
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default HashList;
