export const linkResolver = (doc: any): string => {
  switch (doc.type) {
    case "page":
      return `/${doc.uid}`;
    default:
      return "/";
  }
};
