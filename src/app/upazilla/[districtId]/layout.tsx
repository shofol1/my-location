import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upazilas",
  description: "Upazila page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
