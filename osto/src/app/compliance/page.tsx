"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import Image from "next/image";
const complianceData = [
  "aicpa.png",
  "ccpa.png",
  "cis.png",
  "iso.png",
  "csa-star.png",
  "fedramp.png",
  "file.svg",
  "FISMA-Logo.jpg",
  "GDPR.png",
  "hitrust.webp",
  "csa-star.png",
  "hippa.png",
];

export default function Compliance() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1d4e] mb-4">
              Compliance & VAPT
            </h1>
            <p className="text-lg text-gray-600">
              Comprehensive compliance solutions and vulnerability assessment &
              penetration testing services
            </p>
          </div>
          <div className="mb-16">
            <div className="max-w-3xl mx-auto mb-8">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-4">
                      Security Questionnaire
                    </h2>
                    <p className="text-gray-600">
                      Complete our interactive security questionnaire to assess
                      your current security posture
                    </p>
                  </div>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        What industry is your organization in?
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select an industry</option>
                        <option value="finance">Finance</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="technology">Technology</option>
                        <option value="retail">Retail</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        How many employees does your organization have?
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <label className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="employees"
                            value="1-50"
                            className="h-4 w-4"
                          />
                          <span>1-50</span>
                        </label>
                        <label className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="employees"
                            value="51-200"
                            className="h-4 w-4"
                          />
                          <span>51-200</span>
                        </label>
                        <label className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="employees"
                            value="201-1000"
                            className="h-4 w-4"
                          />
                          <span>201-1000</span>
                        </label>
                        <label className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="employees"
                            value="1000+"
                            className="h-4 w-4"
                          />
                          <span>1000+</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Which compliance standards are relevant to your
                        organization? (Select all that apply)
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="compliance"
                            value="iso27001"
                            className="h-4 w-4"
                          />
                          <span>ISO 27001</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="compliance"
                            value="soc2"
                            className="h-4 w-4"
                          />
                          <span>SOC 2</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="compliance"
                            value="gdpr"
                            className="h-4 w-4"
                          />
                          <span>GDPR</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="compliance"
                            value="hipaa"
                            className="h-4 w-4"
                          />
                          <span>HIPAA</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="compliance"
                            value="pci"
                            className="h-4 w-4"
                          />
                          <span>PCI DSS</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        What are your primary security concerns? (Select up to
                        3)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="concerns"
                            value="data_breach"
                            className="h-4 w-4"
                          />
                          <span>Data breaches</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="concerns"
                            value="ransomware"
                            className="h-4 w-4"
                          />
                          <span>Ransomware</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="concerns"
                            value="compliance"
                            className="h-4 w-4"
                          />
                          <span>Compliance requirements</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="concerns"
                            value="insider_threats"
                            className="h-4 w-4"
                          />
                          <span>Insider threats</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="concerns"
                            value="phishing"
                            className="h-4 w-4"
                          />
                          <span>Phishing attacks</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="concerns"
                            value="cloud_security"
                            className="h-4 w-4"
                          />
                          <span>Cloud security</span>
                        </label>
                      </div>
                    </div>
                    <div className="text-center pt-4">
                      <Button type="submit" size="lg">
                        Get Your Security Assessment
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-4">
                VAPT Services Overview
              </h2>
              <p className="text-gray-600">
                Our comprehensive Vulnerability Assessment and Penetration
                Testing services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <div className="w-12 h-12 rounded-full bg-[#f0f4ff] flex items-center justify-center mb-4">
                      <AlertTriangle className="h-6 w-6 text-[#1a1d4e]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1a1d4e] mb-2">
                      Vulnerability Assessment
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Systematic review of security weaknesses in your systems
                      and applications
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Automated scanning with expert validation
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Detailed vulnerability reports with severity ratings
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Remediation recommendations
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Regular scheduled assessments
                        </span>
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
                    <div className="w-12 h-12 rounded-full bg-[#f0f4ff] flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-[#1a1d4e]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1a1d4e] mb-2">
                      Penetration Testing
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Simulated cyber attacks to identify exploitable
                      vulnerabilities
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Manual testing by certified security experts
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Real-world attack scenarios
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Exploitation proof-of-concept
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Detailed reporting and executive summary
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
          </div>
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-4">
                Compliance Support
              </h2>
              <p className="text-gray-600">
                We help you meet and maintain compliance with major security
                standards
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {complianceData.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="flex justify-center"
                >
                  <div className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center p-4">
                    <Image
                      height={1280}
                      width={1280}
                      src={`/${badge}`}
                      alt={`${badge} Compliance`}
                      className="max-w-full max-h-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-6">
              Ready to achieve compliance and secure your systems?
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
