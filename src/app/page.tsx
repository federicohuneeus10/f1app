import { createPrismicClient } from "./utils/prismic";
import { SliceZone } from "@prismicio/react";
import styles from "./page.module.css";
import Layout from "../components/Layout/Layout";

export default async function Home() {
  const client = createPrismicClient();

  const documents = await client.getByType("homepage", {});
  const headerDocs = await client.getByType("header", {});

  const homepage = documents.results[0];
  const header = headerDocs.results[0];

  const data = {
    title: homepage?.data?.title || "No title found",
    slices: homepage?.data?.slices || [],
  };

  return (
    <div className={styles.page}>
      <Layout header={header}>
        <h1>{data.title}</h1>
      </Layout>
    </div>
  );
}
