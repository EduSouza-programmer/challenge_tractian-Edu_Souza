import Head from "next/head";

interface PageSEOProps {
  title: string;
  suffixTitleAplication?: string;
  description: string;
  image?: string;
  shouldExcludeTitleSuffix?: boolean;
  shouldIndexPage?: boolean;
}

function PageSEO({
  title,
  suffixTitleAplication,
  description,
  image,
  shouldExcludeTitleSuffix,
  shouldIndexPage,
}: PageSEOProps) {
  const pageTitle = `${title} ${
    !shouldExcludeTitleSuffix ? suffixTitleAplication : ""
  }`;
  const pageImage = image ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}` : "";

  return (
    <Head>
      <title>{pageTitle}</title>

      <meta name="description" content={description} />
      {pageImage && (
        <>
          <meta name="image" content={pageImage} />
          <meta name="msapplication-TileImage" content={pageImage} />
        </>
      )}

      {shouldIndexPage ? (
        <>
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
        </>
      ) : (
        <>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex, nofollow" />
        </>
      )}

      <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt-br" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />

      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />

      <meta name="twitter:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
      <meta property="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@YOUR_TWITTER" />
      <meta property="twitter:creator" content="@YOUR_TWITTER" />
      <meta property="twitter:image" content={pageImage} />
      <meta property="twitter:image:src" content={pageImage} />
      <meta property="twitter:image:alt" content="Thumbnail" />

      <meta property="twitter:image:width" content="512" />
      <meta property="twitter:image:height" content="512" />
    </Head>
  );
}

PageSEO.defaultProps = {
  suffixTitleAplication: "| YOUR_SUFFIX_PAGE_APLICATION_HERE",
  image: "",
  shouldExcludeTitleSuffix: false,
  shouldIndexPage: true,
};

export default PageSEO;
