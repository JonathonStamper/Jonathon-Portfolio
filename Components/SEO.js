import Head from "next/head";
import React from "react";

const SEO = ({
  TITLE = "Jonathon Stamper - Full Stack Developer",
  DESCRIPTION = "Hi, my name is Jonathon Stamper. I am a 21 year old, software engineering student, who enjoys taking on new challenges and the learning opportunities they bring.",
  URL = "/",
  KEYWORDS = "Jonathon, Stamper, Jonathon Stamper, Portfolio, Software Engineer, Developer",
//   Image="https://thehaguenetwork.org/Banner.png"

}) => {
  return (
    <Head>
      <title>{TITLE}</title>

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={DESCRIPTION} />
      <meta name="keywords" content={KEYWORDS} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={`https://jonathon-stamper.com` + URL} />

      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      
      <meta property="og:url" content={`https://jonathon-stamper.com` + URL} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      
      <meta name="twitter:url" content={`https://jonathon-stamper.com` + URL} />

      <meta name="google-site-verification" content="kzbK5Fl1SVTJ0KkU9Xdfblf2MiEf6LbG2-VdoMg2WeE" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
