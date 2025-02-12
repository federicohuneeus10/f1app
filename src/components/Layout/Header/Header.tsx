"use client";
import { HeaderContainer } from "./Header.styles";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import DocumentLink from "../../DocumentLink/DocumentLink";

interface HeaderProps {
  header: React.ReactNode;
}

export default function Header({ header }: HeaderProps) {
  return (
    <HeaderContainer>
      <Image
        alt={header?.data.logo || "Alt text"}
        src={header?.data.logo.url}
        width={80}
        height={60}
      />
      <ul>
        {header.data.links[0].link.map((l, index) => (
          <li key={index}>
            <DocumentLink key={l.id} doc={l} />
          </li>
        ))}
      </ul>
    </HeaderContainer>
  );
}
