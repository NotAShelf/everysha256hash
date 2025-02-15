"use client";

import { FC } from "react";

interface CopyButtonProps {
  hash: string;
}

const CopyButton: FC<CopyButtonProps> = ({ hash }) => {
  return (
    <button onClick={() => navigator.clipboard.writeText(hash)}>Copy</button>
  );
};

export default CopyButton;
