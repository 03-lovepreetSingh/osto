"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Monitor, Lock, FileText } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";
export default function EndpointSecurity() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1d4e] mb-4">
              Endpoint Security
            </h1>
            <p className="text-lg text-gray-600">
              Complete protection for all your endpoints with advanced threat
              detection and prevention
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {endpointFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#f0f4ff] flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1a1d4e] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#f0f4ff] rounded-xl p-6 sm:p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-4">
                  Endpoint Protection Dashboard
                </h2>
                <p className="text-gray-600">
                  Monitor and manage all your endpoints from a single, intuitive
                  dashboard
                </p>
              </div>
              <div className="relative">
                <motion.img
                  src="https://via.placeholder.com/1200x600"
                  alt="Endpoint Security Dashboard"
                  className="w-full h-auto rounded-lg shadow-lg"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  viewport={{
                    once: true,
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {benefitCards.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-[#1a1d4e] mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {benefit.description}
                      </p>
                      <ul className="space-y-2">
                        {benefit.points.map((point, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-6">
                Ready to secure your endpoints?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/demo">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
const endpointFeatures = [
  {
    icon: <Shield className="h-6 w-6 text-[#1a1d4e]" />,
    title: "Antimalware",
    description:
      "Advanced protection against viruses, ransomware, and other malicious software",
  },
  {
    icon: <Monitor className="h-6 w-6 text-[#1a1d4e]" />,
    title: "Device Control",
    description:
      "Manage and control access to USB and other peripheral devices",
  },
  {
    icon: <Lock className="h-6 w-6 text-[#1a1d4e]" />,
    title: "App Control",
    description:
      "Whitelist and blacklist applications to prevent unauthorized software execution",
  },
  {
    icon: <FileText className="h-6 w-6 text-[#1a1d4e]" />,
    title: "DLP",
    description:
      "Data Loss Prevention to protect sensitive information from leakage",
  },
];
const benefitCards = [
  {
    title: "Real-time Protection",
    description:
      "Continuous monitoring and protection against emerging threats",
    points: [
      "Zero-day threat detection",
      "Behavioral analysis",
      "Cloud-based threat intelligence",
      "Automatic updates",
    ],
  },
  {
    title: "Minimal Performance Impact",
    description: "Designed to protect without slowing down your devices",
    points: [
      "Lightweight agent",
      "Smart scanning technology",
      "Optimized resource usage",
      "Background operation",
    ],
  },
  {
    title: "Centralized Management",
    description: "Manage all endpoints from a single, intuitive console",
    points: [
      "Group policy management",
      "Remote deployment",
      "Detailed reporting",
      "Alert configuration",
    ],
  },
];
