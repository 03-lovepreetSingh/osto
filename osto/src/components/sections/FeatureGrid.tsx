"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "../ui/card";
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}
interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}
export function FeatureGrid({
  title,
  subtitle,
  description,
  features,
  columns = 3,
}: FeatureGridProps) {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  const getColumnsClass = () => {
    switch (columns) {
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {(title || subtitle || description) && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            {subtitle && (
              <span className="inline-block text-sm font-medium text-blue-600 mb-2">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1d4e] mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-gray-600">{description}</p>
            )}
          </div>
        )}
        <motion.div
          className={`grid ${getColumnsClass()} gap-6 md:gap-8`}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-100px",
          }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#c6e6ff] flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold text-[#1a1d4e] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
