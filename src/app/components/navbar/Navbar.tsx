import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="text-2xl text-center font-bold py-4">
      <Link href={`/`}>Logo</Link>
    </div>
  );
}
