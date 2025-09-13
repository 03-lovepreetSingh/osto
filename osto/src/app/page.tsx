"use client";

import { Hero } from "../components/sections/Hero";
import { Shield, Globe, Cloud, CheckCircle, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero
        subtitle="Enterprise Grade"
        title="End-to-end cybersecurity protection in 9 minutes"
        description="Built for New-Age Businesses"
        primaryAction={{
          text: "Secure your Business Now",
          href: "/demo",
        }}
        secondaryAction={{
          text: "Learn More",
          href: "/about",
        }}
        features={[
          "Get Live in 9 Mins",
          "No Security Team Needed",
          "Monthly Subscription",
          "AI Powered",
        ]}
        image="/home.png"
      />

      {/* Security Modules Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1d4e] mb-4">
              Core Security Modules
            </h2>
            <p className="text-lg text-gray-600">
              11 Modules covering the most essential use cases needed by a fast
              growing startup.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-[#1a1d4e] text-white flex items-center justify-center mb-4">
                      {module.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1a1d4e] mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-600">{module.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1d4e] mb-4">
              Simple Pricing. Powerful Security.
            </h2>
            <p className="text-lg text-gray-600">
              We want to ensure that cybersecurity is accessible without slowing
              down your growth journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingCards.map((card, index) => (
              <Card key={index} className={card.borderClass}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-[#1a1d4e] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{card.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#1a1d4e]">
                      {card.price}
                    </span>
                    <span className="text-gray-600"> / User / Month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className={`h-5 w-5 ${feature.color}`} />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/demo">
                    <Button className="w-full">Get started</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Compliance Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1d4e] mb-4">
              Your Data. Our Top Priority.
            </h2>
            <p className="text-lg text-gray-600">
              At Osto, we prioritize data privacy and uphold the highest
              standards of security.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {complianceCards.map((card, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f0f4ff] flex items-center justify-center">
                    <Image
                      height={1280}
                      width={1280}
                      src={card.image}
                      alt={card.alt}
                      className="h-10 w-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a1d4e] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Enterprise Security Card */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#f0f4ff] flex items-center justify-center">
                    <Lock className="h-8 w-8 text-[#1a1d4e]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1a1d4e] mb-2">
                    Enterprise-Grade Security
                  </h3>
                  <p className="text-gray-600">
                    Osto employs industry-leading security measures, including
                    end-to-end encryption, multi-factor authentication, and
                    continuous security monitoring to ensure your data remains
                    protected at all times.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#f0f4ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-4">
                  Join the Community
                </h2>
                <p className="text-gray-600">
                  Stay informed with the latest updates, insights, and industry
                  news delivered straight to your inbox every week.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {newsletterFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Helper data arrays
const securityModules = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "API Protection",
    description:
      "Uses rate limiting and traffic inspection to prevent abuse and attacks.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Compliance as a Service*",
    description:
      "Helps you achieve compliance with ISO 27001, SOC 2, GDPR, and more.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Log Analyzer",
    description:
      "Monitors, parses, and analyzes logs to deliver deep security insights.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Secure Server Access",
    description:
      "Encrypted & controlled server access with MFA & self-host gateway.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Threat Protection",
    description:
      "Protects endpoints from threats, including malware, ransomware, and zero-day exploits.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Web Scanner",
    description:
      "Automates vulnerability scanning and assessment to uncover security risks.",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Scanner",
    description:
      "Provides runtime security with integrated cloud-native posture.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "VAPT as a Service*",
    description:
      "Simulates real cyber-attacks via automated and manual testing.",
  },
];

const pricingCards = [
  {
    title: "Osto One",
    borderClass: "border border-gray-200",
    description:
      "Comprehensive cybersecurity built for businesses that demand reliability, control, and peace of mind.",
    price: "$10",
    features: [
      { text: "All Security Modules Included", color: "text-gray-400" },
      { text: "Each User can use upto 3 devices", color: "text-gray-400" },
      { text: "24/7 Threat Monitoring", color: "text-gray-400" },
    ],
    buttonVariant: "outline",
  },
  {
    title: "Osto One + Managed Services*",
    borderClass: "border-2 border-[#1a1d4e]",
    description:
      "Full protection plus expert-led management, proactive threat response, and dedicated support — your security, fully handled.",
    price: "$15",
    features: [
      { text: "All Security Modules Included", color: "text-green-500" },
      { text: "Each User can use upto 3 devices", color: "text-green-500" },
      { text: "24/7 Threat Monitoring", color: "text-green-500" },
      { text: "*MSP-Backed Dedicated Support", color: "text-green-500" },
    ],
    buttonVariant: "default",
  },
];

const complianceCards = [
  {
    image: "/iso.png",
    alt: "ISO 27001",
    title: "ISO 27001 Certified",
    description:
      "Our systems meet international standards for security management.",
  },
  {
    image: "/soc2.png",
    alt: "SOC 2",
    title: "SOC 2 Type II Compliant",
    description:
      "Independently verified security, availability, and confidentiality.",
  },
  {
    image: "/gdpr.png",
    alt: "GDPR",
    title: "GDPR Compliant",
    description:
      "We adhere to strict data privacy regulations and best practices.",
  },
];

const newsletterFeatures = [
  "No Spam",
  "Expert insights & analysis",
  "Exclusive news & trends",
  "Curated monthly insights",
];
