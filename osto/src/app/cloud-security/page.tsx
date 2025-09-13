"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cloud, Shield, Database, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import cloudImg from "../../../public/cloud.png";
export default function CloudSecurity() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1d4e] mb-4">
              Cloud Security
            </h1>
            <p className="text-lg text-gray-600">
              Comprehensive protection for your cloud infrastructure,
              applications, and data
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {cloudModules.map((module, index) => (
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
                    <div className="w-12 h-12 rounded-full bg-[#f0f4ff] flex items-center justify-center mb-4">
                      {module.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1a1d4e] mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{module.description}</p>
                    <ul className="space-y-2">
                      {module.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-4">
                Cloud Security Dashboard
              </h2>
              <p className="text-gray-600">
                Monitor and manage your cloud security posture from a single,
                unified dashboard
              </p>
            </div>
            <motion.div
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
            >
              <div className="bg-[#f0f4ff] rounded-xl p-6 overflow-hidden">
                <Image
                  height={1280}
                  width={1280}
                  src={cloudImg}
                  alt="Cloud Security Dashboard"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-4">
                Reports & Use Cases
              </h2>
              <p className="text-gray-600">
                Comprehensive reporting and real-world use cases for cloud
                security
              </p>
            </div>
            <div className="space-y-4">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  <Card>
                    <details className="group">
                      <summary className="flex justify-between items-center p-6 cursor-pointer">
                        <h3 className="text-xl font-semibold text-[#1a1d4e]">
                          {useCase.title}
                        </h3>
                        <span className="transition-transform group-open:rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-gray-500"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 mb-4">
                          {useCase.description}
                        </p>
                        <h4 className="font-semibold text-[#1a1d4e] mb-2">
                          Benefits:
                        </h4>
                        <ul className="space-y-2 mb-4">
                          {useCase.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-6">
              Ready to secure your cloud infrastructure?
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
      </section>
    </>
  );
}
const cloudModules = [
  {
    icon: <Shield className="h-6 w-6 text-[#1a1d4e]" />,
    title: "Web App & API Protection",
    description:
      "Protect your web applications and APIs from advanced threats and attacks",
    features: [
      "DDoS protection",
      "Bot management",
      "WAF with OWASP Top 10 coverage",
      "API security",
    ],
  },
  {
    icon: <Database className="h-6 w-6 text-[#1a1d4e]" />,
    title: "Cloud Scanners",
    description:
      "Continuously scan your cloud infrastructure for vulnerabilities and misconfigurations",
    features: [
      "Container security",
      "Serverless function scanning",
      "IaC template validation",
      "Registry scanning",
    ],
  },
  {
    icon: <Cloud className="h-6 w-6 text-[#1a1d4e]" />,
    title: "Posture Management",
    description:
      "Maintain a strong security posture across your multi-cloud environment",
    features: [
      "Compliance monitoring",
      "Identity and access management",
      "Asset inventory",
      "Risk assessment",
    ],
  },
];
const useCases = [
  {
    title: "Securing Kubernetes Deployments",
    description:
      "Comprehensive security for container orchestration platforms like Kubernetes, ensuring your containerized applications remain protected from development to production.",
    benefits: [
      "Automated scanning of container images for vulnerabilities",
      "Runtime protection against container escape and lateral movement",
      "Kubernetes-native security policies and enforcement",
      "Compliance with CIS Kubernetes Benchmark",
    ],
  },
  {
    title: "Multi-Cloud Compliance Management",
    description:
      "Maintain compliance across AWS, Azure, GCP, and other cloud providers with unified policy enforcement and continuous monitoring.",
    benefits: [
      "Single dashboard for multi-cloud compliance status",
      "Automated remediation of compliance violations",
      "Pre-built compliance templates for major standards (SOC 2, ISO 27001, GDPR, etc.)",
      "Custom compliance policy creation and enforcement",
    ],
  },
  {
    title: "Serverless Security",
    description:
      "Protect your serverless functions from vulnerabilities, misconfigurations, and runtime threats with purpose-built security controls.",
    benefits: [
      "Function code scanning for vulnerabilities",
      "Runtime protection against injection attacks",
      "Least privilege IAM recommendations",
      "Function activity monitoring and anomaly detection",
    ],
  },
  {
    title: "Cloud Data Protection",
    description:
      "Ensure your sensitive data in cloud storage remains protected with comprehensive data security controls.",
    benefits: [
      "Data classification and discovery",
      "Encryption management",
      "Access control monitoring",
      "Data loss prevention for cloud storage",
    ],
  },
];
