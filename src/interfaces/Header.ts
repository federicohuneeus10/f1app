import { ImageField, LinkField, GroupField } from "@prismicio/types";

type HeaderData = {
  logo: ImageField;
  links: GroupField<{
    link: LinkField; // Use Prismic's LinkField type
    label?: string;
  }>;
};

export type HeaderProps = {
  alternate_languages: Array<any>;
  data: HeaderData;
  first_publication_date: string;
  href: string;
  id: string;
  lang: string;
  last_publication_date: string;
  linked_documents: Array<any>;
  slugs: string[];
  tags: string[];
  type: string;
  uid: string | null;
  url: string | null;
};
