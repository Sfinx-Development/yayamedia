import { Helmet } from "react-helmet-async";

type BreadcrumbItem = {
  name: string;
  url: string;
};

type Props = {
  /** Unik sidtitel */
  title: string;
  /** Kort meta-description (ca 150–160 tecken) */
  description: string;
  /** Absolut canonical-URL till sidan */
  url: string;
  /** Absolut URL till delningsbild (rekommenderat 1200x630) */
  image: string;
  /** Og-typ, default "website" */
  ogType?: "website" | "article";
  /** Valfria breadcrumbs för WebPage-schema */
  breadcrumbs?: BreadcrumbItem[];
};

const SITE = {
  name: "YayaMedia",
  org: "YayaMedia AB",
  baseUrl: "https://www.yayamedia.se",
  locale: "sv_SE",
  twitter: "@YayaMedia",
  logo: "https://www.yayamedia.se/logo.webp",
};

export default function HelmetWrapper({
  title,
  description,
  url,
  image,
  ogType = "website",
  breadcrumbs = [],
}: Props) {
  // Organization
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.org,
    url: SITE.baseUrl,
    logo: SITE.logo,
    description:
      "YayaMedia skapar moderna webbar, varumärken och innehåll med fokus på SEO, prestanda och tillgänglighet.",
    sameAs: [
      "https://www.instagram.com/yayamedia",
      "https://www.linkedin.com/company/yayamedia",
    ],
  };

  // WebSite
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.baseUrl}/sok?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // WebPage (+ ev. BreadcrumbList)
  const breadcrumbList =
    breadcrumbs.length > 0
      ? {
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((b, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: b.name,
            item: b.url,
          })),
        }
      : undefined;

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url,
    description,
    isPartOf: { "@type": "WebSite", url: SITE.baseUrl, name: SITE.name },
    ...(breadcrumbList ? { breadcrumb: breadcrumbList } : {}),
  };

  return (
    <Helmet>
      {/* Grundläggande SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={SITE.org} />
      <meta name="theme-color" content="#ffffff" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={SITE.twitter} />

      {/* Structured data */}
      <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(webSiteJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(webPageJsonLd)}</script>
    </Helmet>
  );
}
