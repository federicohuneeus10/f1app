import { SliceZone } from "@prismicio/react";
import { components } from "@/slices"; // Adjust this path to match your setup
import Layout from "@/components/Layout/Layout"; // Adjust the path as per your structure
import { createPrismicClient } from "../utils/prismic";
import { HeaderProps } from "../../interfaces/Header";

export default async function Page({ params }: { params: { uid: string } }) {
  const client = createPrismicClient();

  // Fetch the document and header
  const [document, headerDocs] = await Promise.all([
    client.getByUID("page", params.uid), // Default locale
    client.getByType("header"), // Default locale
  ]);

  // Handle 404 for missing document
  if (!document) {
    return {
      notFound: true,
    };
  }

  const header = headerDocs.results[0] as HeaderProps; // Get the first header document
  const data = document.data;

  return (
    <Layout header={header}>
      <SliceZone slices={data.slices || []} components={components} />
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createPrismicClient();

  const documents = await client.getByType("page");

  return documents.results.map((doc) => ({
    uid: doc.uid,
  }));
}
