"use client";
import React from "react";
import { FooterContainer } from "./Footer.styles";

export default function Footer() {
  const links = ["Home", "Drivers", "Tracks", "News"];
  return (
    <FooterContainer>
      <ul>
        {links.map((l, index) => {
          return <li key={index}>{l}</li>;
        })}
      </ul>
    </FooterContainer>
  );
}
