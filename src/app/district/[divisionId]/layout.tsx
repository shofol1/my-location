import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Districts",
  description: "District page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
