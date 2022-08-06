/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Digital Kitchen",
  titleTemplate: "%s | Digital Kitchen",
  defaultTitle: "Digital Kitchen",
  description: "Recipes for a decentralised future",
  canonical: "https://digitalkitchen.zone",
  openGraph: {
    url: "https://digital-kitchen.zone",
    title: "digital-kitchen",
    description: "Recipes for a decentralised future",
    images: [
      {
        url: "https://pbs.twimg.com/profile_banners/1554169351149854721/1659378435/600x200",
        alt: "Digital Kitchen Brand Image",
      },
    ],
    site_name: "Ditigal Kitchen",
  },
  twitter: {
    handle: "@DgtlKitchen",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
