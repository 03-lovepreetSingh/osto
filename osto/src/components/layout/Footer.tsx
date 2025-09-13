"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="bg-[#0e1033] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Support & Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Support & Info</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help"
                  className="hover:text-blue-300 transition-colors"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-blue-300 transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-blue-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="hover:text-blue-300 transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/exchange"
                  className="hover:text-blue-300 transition-colors"
                >
                  Exchange Policy
                </Link>
              </li>
            </ul>
          </div>
          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Let&lsquo;s Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sales"
                  className="hover:text-blue-300 transition-colors"
                >
                  Talk to Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Compliance */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Trusted Security & Compliance Standards
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              At Osto, we prioritize information security and data privacy. With
              ISO 27001 certification and SOC 2 Type II compliance, we uphold
              the highest standards to protect your data.
            </p>
            <div className="flex space-x-4">
              <Image
                height={1280}
                width={1280}
                src="/soc2.png"
                alt="SOC 2 Type II Certified"
                className="h-12 w-auto"
              />
              <Image
                height={1280}
                width={1280}
                src="/iso.png"
                alt="ISO 27001 Certified"
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              osto
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Osto.one. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
