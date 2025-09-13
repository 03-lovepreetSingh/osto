"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Globe, Lock, Eye } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import NetworkImg from "../../../public/network.png";
import Image from "next/image";
export default function NetworkSecurity() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1d4e] mb-4">
              Network Security
            </h1>
            <p className="text-lg text-gray-600">
              Protect your network infrastructure with advanced security
              controls and visibility
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#f0f4ff] flex items-center justify-center mr-4">
                      <Lock className="h-6 w-6 text-[#1a1d4e]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1a1d4e]">
                      Zero Trust Network Access
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Implement the principle of &ldquo;never trust, always
                    verify&rdquo; with our Zero Trust Network Access solution.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">
                        Identity-based access controls
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">
                        Least privilege access principles
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">
                        Continuous authentication
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">Micro-segmentation</span>
                    </li>
                  </ul>
                  <Link href="/demo">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#f0f4ff] flex items-center justify-center mr-4">
                      <Globe className="h-6 w-6 text-[#1a1d4e]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1a1d4e]">
                      Web Filtering
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Control and monitor web access to protect your organization
                    from web-based threats.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">
                        URL categorization and filtering
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">
                        Malicious site blocking
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">HTTPS inspection</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">
                        Detailed activity reporting
                      </span>
                    </li>
                  </ul>
                  <Link href="/demo">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-4">
                Network Security
              </h2>
              <p className="text-gray-600">
                Protect your network infrastructure with advanced security
                controls and visibility
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
                  src={NetworkImg}
                  alt="Cloud Security Dashboard"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-4">
                Threat Detection Highlights
              </h2>
              <p className="text-gray-600">
                Our advanced threat detection system identifies and blocks
                network threats in real-time
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {threatDetectionFeatures.map((feature, index) => (
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
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-6">
              Ready to secure your network?
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
const threatDetectionFeatures = [
  {
    icon: <Shield className="h-6 w-6 text-[#1a1d4e]" />,
    title: "Intrusion Detection",
    description:
      "Detect and alert on suspicious network activity and potential intrusions",
  },
  {
    icon: <Eye className="h-6 w-6 text-[#1a1d4e]" />,
    title: "Anomaly Detection",
    description:
      "Identify unusual patterns in network traffic that may indicate threats",
  },
  {
    icon: <Globe className="h-6 w-6 text-[#1a1d4e]" />,
    title: "Malicious IP Blocking",
    description:
      "Automatically block connections from known malicious IP addresses",
  },
  {
    icon: <Lock className="h-6 w-6 text-[#1a1d4e]" />,
    title: "DDoS Protection",
    description: "Defend against distributed denial of service attacks",
  },
  {
    icon: <Shield className="h-6 w-6 text-[#1a1d4e]" />,
    title: "Data Exfiltration Prevention",
    description: "Prevent sensitive data from leaving your network",
  },
  {
    icon: <Eye className="h-6 w-6 text-[#1a1d4e]" />,
    title: "Real-time Monitoring",
    description: "24/7 monitoring of network traffic with instant alerts",
  },
];
