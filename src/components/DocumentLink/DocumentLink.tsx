import React from "react";
import Link from "next/link";
import { linkResolver } from "../../utils/linkResolver";

const DocumentLink = ({ doc }: { doc: any }) => {
  const url = linkResolver(doc);

  return <Link href={url}>{doc.text || "Click here"}</Link>;
};

export default DocumentLink;
