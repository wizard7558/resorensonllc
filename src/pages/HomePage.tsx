import React from 'react';
import SEO from '../components/SEO';
import { organizationSchema, professionalServiceSchema, generateReviewSchema } from '../data/structuredData';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import TechnologyShowcase from '../components/home/TechnologyShowcase';
import ROICounter from '../components/home/ROICounter';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
  // Sample reviews for structured data
  const reviews = [
    {
      author: "Sarah Chen",
      rating: 5,
      reviewBody: "RESorenson transformed our chaotic MarTech stack into a revenue-generating machine. Our MQL-to-SQL conversion rate jumped from 12% to 41% in just 4 months. Part of over $100M in revenue impact generated.",
      datePublished: "2024-12-15"
    },
    {
      author: "David Rodriguez", 
      rating: 5,
      reviewBody: "The data infrastructure overhaul eliminated our attribution blind spots completely. We now have full visibility into our customer journey and achieved 2.6x ROAS improvement.",
      datePublished: "2024-11-20"
    },
    {
      author: "Jennifer Park",
      rating: 5,
      reviewBody: "Our lead scoring and routing automation reduced our sales cycle by 35% while improving lead quality. Contributing to $100M+ in total revenue impact across all clients.",
      datePublished: "2024-10-10"
    }
  ];

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      professionalServiceSchema,
      generateReviewSchema(reviews)
    ]
  };

  return (
    <div className="bg-white">
      <SEO
        title="MarTech Consulting & Revenue Operations Expert"
        description="Transform marketing chaos into revenue-driving systems. Strategic MarTech optimization, data infrastructure, and analytics implementation with proven 200-400% ROI improvements."
        keywords="martech consulting, marketing technology optimization, revenue operations, hubspot consultant, salesforce integration, data infrastructure, marketing automation, attribution modeling"
        canonicalUrl="/"
        structuredData={combinedSchema}
      />
      <HeroSection />
      <ServicesOverview />
      <TechnologyShowcase />
      <ROICounter />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;