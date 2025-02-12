"use client";
import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  max-width: 1136px;
  width: 100%;
  img {
    border-radius: 16px;
  }
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .profile {
    display: flex;
    flex-direction: row;
    width: fit-content;
    background: #10100e;
    padding: 16px 32px;
    border-radius: 16px;
    h1 {
      color: #fff;
      padding-bottom: 16px;
    }
    .col.info {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .lg {
        font-size: 32px;
        font-weight: 600;
      }
      p {
        color: #fff;
        &.light-white {
          color: #d0d0d0;
        }
      }
    }
  }
  .row-of-imgs {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 32px;
    margin-top: 32px;
    width: 100%;
    background-color: #10100e;
    border-radius: 16px;
  }
`;
