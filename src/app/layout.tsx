"use client";
import HeaderLayout from "@/layouts/BaseLayout/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { makeStyles } from "tss-react/mui";
import "./globals.css";
import Providers from "@/common/utils/providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IOT Website",
  description: "Remote control hardware",
};

const useStyles = makeStyles()({
  wrapper: {
    paddingTop: "var(--height-header)",
    minHeight: "95vh",
  },
});
export default function Layout({ children }: { children: React.ReactNode }) {
  const { classes } = useStyles();
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <div>
          <HeaderLayout />
          <main className={classes.wrapper}>
            <Suspense>
              <Providers> {children}</Providers>
            </Suspense>
          </main>
        </div>
      </body>
    </html>
  );
}
