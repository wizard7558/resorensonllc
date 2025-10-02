// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lattara",
  "url": "https://lattara.com",
  "logo": "https://lattara.com/RES Icon Transparent.png",
  "description": "Strategic MarTech consulting, data infrastructure design, and analytics implementation that delivers measurable business outcomes.",
  "founder": {
    "@type": "Person",
    "name": "Riley Sorenson"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-949-632-7363",
    "contactType": "customer service",
    "email": "riley@lattara.com",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/in/rsorensondata/"
  ],
  "serviceArea": {
    "@type": "Place",
    "name": "Global"
  }
};

// Professional Service Schema
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Lattara",
  "image": "https://lattara.com/RES Icon Transparent.png",
  "description": "Strategic MarTech optimization, data infrastructure, and revenue operations consulting services.",
  "provider": {
    "@type": "Organization",
    "name": "Lattara"
  },
  "areaServed": "Global",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "MarTech Consulting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "MarTech Stack Optimization",
          "description": "Lead scoring, attribution modeling, and automation workflows that eliminate data silos."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Infrastructure",
          "description": "CDP implementation, data warehousing, and pipeline architecture for unified customer data."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Analytics & Reporting",
          "description": "GA4 setup, conversion tracking, and dashboard creation with governance frameworks."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Revenue Operations",
          "description": "Sales and marketing alignment through optimized lead lifecycle management."
        }
      }
    ]
  }
};

// FAQ Schema Generator
export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Article Schema Generator
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image || "https://lattara.com/RES Icon Transparent.png",
  "author": {
    "@type": "Person",
    "name": article.author || "Riley Sorenson"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Lattara",
    "logo": {
      "@type": "ImageObject",
      "url": "https://lattara.com/RES Icon Transparent.png"
    }
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished
});

// Review Schema Generator
export const generateReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lattara",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
    "reviewCount": reviews.length,
    "bestRating": 5,
    "worstRating": 1
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5,
      "worstRating": 1
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished
  }))
});