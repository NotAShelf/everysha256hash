"use client";

import { FC } from "react";

interface HashListProps {
  hashes: string[];
}

const HashList: FC<HashListProps> = ({ hashes }) => {
  return (
    <div className="hash-list">
      {hashes.map((hash, index) => (
        <div className="hash-item" key={index}>
          <a href={`/${hash}`} target="_blank" rel="noopener noreferrer">
            {hash}
          </a>
        </div>
      ))}
    </div>
  );
};

export default HashList;
