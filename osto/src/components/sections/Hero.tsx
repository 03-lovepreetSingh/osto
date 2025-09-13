"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  features?: string[];
  image?: string;
  imageAlt?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  features,
  image,
  imageAlt,
}: HeroProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex flex-col"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {subtitle && (
              <motion.div variants={item} className="mb-4">
                <span className="inline-flex items-center rounded-full bg-[#c6e6ff] px-4 py-1 text-sm font-medium text-[#1a1d4e]">
                  {subtitle}
                </span>
              </motion.div>
            )}

            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1d4e] leading-tight mb-4"
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p variants={item} className="text-lg text-gray-600 mb-8">
                {description}
              </motion.p>
            )}

            {features && features.length > 0 && (
              <motion.div
                variants={item}
                className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </motion.div>
            )}

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4"
            >
              {primaryAction && (
                <Link href={primaryAction.href}>
                  <Button size="lg">{primaryAction.text}</Button>
                </Link>
              )}
              {secondaryAction && (
                <Link href={secondaryAction.href}>
                  <Button variant="outline" size="lg">
                    {secondaryAction.text}
                  </Button>
                </Link>
              )}
            </motion.div>
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden lg:block"
            >
              <Image
                height={600}
                width={1280}
                src={image}
                alt={imageAlt || "Hero image"}
                className="w-full object-cover max-h-[400px] rounded-lg shadow-xl"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
