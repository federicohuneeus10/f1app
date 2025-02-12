import * as prismic from "@prismicio/client";

export const createPrismicClient = () => {
  const endpoint = prismic.getRepositoryEndpoint("formula1app"); // Replace with your Prismic repo name
  const client = prismic.createClient(endpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN, // Add your access token if you have one
  });
  return client;
};
