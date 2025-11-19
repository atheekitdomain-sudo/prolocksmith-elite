import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOProps } from '../types';

const SEOHead: React.FC<SEOProps> = ({ title, description, keywords, image, url, schema }) => {
  const siteName = "ProLocksmith Elite";
  const fullTitle = `${title} | ${siteName}`;
  
  // Default LocalBusiness Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "name": siteName,
    "image": "https://picsum.photos/1200/630",
    "telephone": "+94 77 438 0935",
    "url": "https://prolocksmith-elite.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Metropolis",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ]
  };

  const finalSchema = schema ? { ...defaultSchema, ...schema } : defaultSchema;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || "locksmith, car keys, emergency lockout, key programming"} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || window.location.href} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || "https://picsum.photos/1200/630"} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || window.location.href} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image || "https://picsum.photos/1200/630"} />

      {/* Canonical */}
      <link rel="canonical" href={url || window.location.href} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEOHead;