"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Shield, Clock, Building } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1d4e] mb-4">
              About Osto.one
            </h1>
            <p className="text-lg text-gray-600">
              Revolutionizing cybersecurity for modern businesses
            </p>
          </div>
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 mb-6">
                  At Osto.one, our mission is to democratize enterprise-grade
                  cybersecurity, making it accessible, affordable, and easy to
                  implement for businesses of all sizes. We believe that robust
                  security shouldn&lsquo;t be a privilege reserved for large
                  corporations with extensive resources.
                </p>
                <p className="text-gray-600 mb-6">
                  We&lsquo;re committed to providing a comprehensive security
                  solution that can be deployed in minutes, not months, and
                  managed without specialized security teams. Our innovative
                  approach combines cutting-edge technology with a user-friendly
                  experience to ensure that every organization can protect their
                  digital assets effectively.
                </p>
                <p className="text-gray-600">
                  By removing the traditional barriers to implementing strong
                  cybersecurity measures, we&lsquo;re helping businesses focus
                  on what they do best while we handle the complexities of
                  keeping them secure in an increasingly threatening digital
                  landscape.
                </p>
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
                className="relative"
              >
                <div className="aspect-video bg-[#f0f4ff] rounded-xl overflow-hidden">
                  <Image
                    height={1280}
                    width={1280}
                    src="/about-team.jpeg"
                    alt="Osto.one Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600">
                Dedicated experts committed to revolutionizing cybersecurity
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
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
                      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                        <Image
                          height={1280}
                          width={1280}
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-[#1a1d4e] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 mb-4">{member.role}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-4">
                Our Impact
              </h2>
              <p className="text-lg text-gray-600">
                Making a difference in cybersecurity every day
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
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
                >
                  <Card className="h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-[#f0f4ff] flex items-center justify-center mx-auto mb-4">
                        {stat.icon}
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-[#1a1d4e] mb-2">
                        {stat.value}
                      </div>
                      <p className="text-gray-600">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mb-16">
            <Card>
              <CardContent className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-4">
                      Contact Information
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Have questions or need more information? Our team is here
                      to help.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-[#1a1d4e] mb-1">
                          Email
                        </h3>
                        <p className="text-gray-600">contact@osto.one</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1a1d4e] mb-1">
                          Phone
                        </h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1a1d4e] mb-1">
                          Headquarters
                        </h3>
                        <p className="text-gray-600">
                          123 Security Street
                          <br />
                          San Francisco, CA 94105
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="How can we help you?"
                          required
                        ></textarea>
                      </div>
                      <Button type="submit">Send Message</Button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1d4e] mb-6">
              Ready to secure your business with Osto.one?
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
const teamMembers = [
  {
    name: "Karmesh Gupta",
    role: "Co-Founder & CEO",
    bio: "Co-Founded WiJungle, a state of the art Network Security Product, focused primarily towards government. With deployments over 550+ Organisations, we received National Award, NITI Aayog supported Graham Bell Award, Nasscom-DSCI Innovation Award etc. for the successful commercialisation of indigenous innovation.",
    image: "/about/karmesh.jpeg",
  },
  {
    name: "Praveen Gupta",
    role: "Co-Founder & CEO",
    bio: " Co-Founder & CTO of OSTO, working with a vision to transform 1 million+ SMBs into security powerhouses through our upcoming product.Deeply passionate about solving complex problems and excel at finding innovative solutions. I believe in leading with empathy and authenticity and strive to embody these values in everything I do.",
    image: "/about/praveen-gupta.jpeg",
  },
  {
    name: "Sahitya Lakshmi",
    role: "SDET 1",
    bio: "QA Engineer with hands-on experience in Software Testing and Quality Assurance. With a strong foundation in both manual and automation testing.",
    image: "/about/sahatiya-lakshmi.jpeg",
  },
  {
    name: "Ravi Bhagat",
    role: "Devops Engineer",
    bio: "Certified ethical hacker and security expert with a background in threat intelligence and incident response.",
    image: "/about/ravi-bhagat.jpeg",
  },
  {
    name: "Deepak Verma",
    role: "SDE-1",
    bio: "Dassionate about full-stack development, problem-solving, and crafting user-friendly solutions with modern frameworks. Always eager to innovate and make an impact in tech.",
    image: "/about/deepak-verma.jpeg",
  },
  {
    name: "Minhaj Uddin",
    role: "Software Developer",
    bio: "Software Developer Engineer at Wi-jungle Gurugram, I design and implement advanced machine learning algorithms to enhance software functionality. I excel in developing efficient back-end code, ensuring cross-platform compatibility, and optimizing systems for scalability and security.",
    image: "/about/minhaj-uddin.jpeg",
  },
];
const stats = [
  {
    icon: <Building className="h-6 w-6 text-[#1a1d4e]" />,
    value: "5,000+",
    label: "Customers Protected",
  },
  {
    icon: <Shield className="h-6 w-6 text-[#1a1d4e]" />,
    value: "10M+",
    label: "Threats Blocked Monthly",
  },
  {
    icon: <Users className="h-6 w-6 text-[#1a1d4e]" />,
    value: "100,000+",
    label: "End Users Secured",
  },
  {
    icon: <Clock className="h-6 w-6 text-[#1a1d4e]" />,
    value: "99.99%",
    label: "Uptime",
  },
];
