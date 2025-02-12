"use client";
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { HeaderProps } from "../../interfaces/Header";

interface LayoutProps {
  children: React.ReactNode;
  header?: HeaderProps;
}

export default function Layout({ children, header }: LayoutProps) {
  return (
    <>
      <h1>{console.log(header, "header")}</h1>
      <Header header={header} />
      <main
        style={{
          flex: 1,
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          paddingTop: "32px",
        }}
      >
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}
