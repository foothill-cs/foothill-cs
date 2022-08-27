import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Space+Mono:ital@0;1&display=swap"
          rel="stylesheet"
        />

        <meta name="title" content="FHS CS Club" />
        <meta
          name="description"
          content="A club at FHS focused on developing interest in computer science while fostering an inclusive and collaborative environment."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fhscs.tech" />
        <meta property="og:title" content="Foothill High School CS Club" />
        <meta
          property="og:description"
          content="A club at FHS focused on developing interest in computer science while fostering an inclusive and collaborative environment."
        />
        <meta property="og:image" content="https://fhscs.tech/IMG_0064.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fhscs.tech/" />
        <meta property="twitter:title" content="Foothill High School CS Club" />
        <meta
          property="twitter:description"
          content="A club at FHS focused on developing interest in computer science while fostering an inclusive and collaborative environment."
        />
        <meta
          property="twitter:image"
          content="https://fhscs.tech/IMG_0064.png"
        ></meta>
        <link rel="shortcut icon" type="image/png" href="/IMG_0064.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
