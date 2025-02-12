"use client";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  background: #fff;
  border-bottom: 1px solid #f0192b;
  margin-top: auto;
  width: 100%;
  padding: 16px 32px;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    padding-left: 16px;

    li {
      display: flex;
      color: #333;
      font-size: 18px;
    }
  }
`;
