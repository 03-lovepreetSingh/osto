"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { CheckCircle } from "lucide-react";
export default function Demo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    employees: "",
    phone: "",
    requirements: "",
    date: "",
    time: "",
    timezone: "UTC",
    acceptTerms: false,
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";
    setFormData({
      ...formData,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit the form data
      alert("Demo request submitted! We will contact you shortly.");
    }
  };
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1d4e] mb-4">
            Request a Demo
          </h1>
          <p className="text-lg text-gray-600">
            Experience the power of Osto.one&lsquo;s cybersecurity platform
            firsthand
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                      i <= step ? "bg-[#1a1d4e]" : "bg-gray-300"
                    }`}
                  >
                    {i < step ? <CheckCircle className="h-5 w-5" /> : i}
                  </div>
                  <span className="text-sm mt-2 text-gray-600">
                    {i === 1
                      ? "Your Info"
                      : i === 2
                      ? "Requirements"
                      : "Schedule"}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1a1d4e] transition-all duration-300"
                style={{
                  width: `${(step / 3) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <Card>
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit}>
                <motion.div
                  key={`step-${step}`}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -20,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  {step === 1 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-[#1a1d4e] mb-4">
                        Your Information
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            First Name*
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Last Name*
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Work Email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Company Name*
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="role"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Job Title*
                        </label>
                        <input
                          type="text"
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="employees"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Company Size*
                        </label>
                        <select
                          id="employees"
                          name="employees"
                          value={formData.employees}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="">Select company size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501-1000">501-1000 employees</option>
                          <option value="1000+">1000+ employees</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  )}
                  {step === 2 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-[#1a1d4e] mb-4">
                        Your Requirements
                      </h2>
                      <div>
                        <label
                          htmlFor="requirements"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          What are your primary security concerns or
                          requirements?
                        </label>
                        <textarea
                          id="requirements"
                          name="requirements"
                          rows={5}
                          value={formData.requirements}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Please describe your current security challenges and what you're looking for in a solution..."
                        ></textarea>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">
                          Which security modules are you most interested in?
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {securityModules.map((module, index) => (
                            <label
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <input type="checkbox" className="h-4 w-4" />
                              <span>{module}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {step === 3 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-[#1a1d4e] mb-4">
                        Schedule Your Demo
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="date"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Preferred Date*
                          </label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="time"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Preferred Time*
                          </label>
                          <input
                            type="time"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="timezone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your Timezone*
                        </label>
                        <select
                          id="timezone"
                          name="timezone"
                          value={formData.timezone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="UTC">UTC</option>
                          <option value="EST">Eastern Time (EST)</option>
                          <option value="CST">Central Time (CST)</option>
                          <option value="MST">Mountain Time (MST)</option>
                          <option value="PST">Pacific Time (PST)</option>
                        </select>
                      </div>
                      <div className="pt-4">
                        <label className="flex items-start space-x-2">
                          <input
                            type="checkbox"
                            name="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                            className="h-4 w-4 mt-1"
                            required
                          />
                          <span className="text-sm text-gray-600">
                            I agree to Osto.one&lsquo;s{" "}
                            <a
                              href="/terms"
                              className="text-blue-600 hover:underline"
                            >
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a
                              href="/privacy"
                              className="text-blue-600 hover:underline"
                            >
                              Privacy Policy
                            </a>
                            . I understand that Osto.one will process my
                            personal data as described in the Privacy Policy.
                          </span>
                        </label>
                      </div>
                    </div>
                  )}
                </motion.div>
                <div className="mt-8 flex justify-between">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  )}
                  <div className={step === 1 ? "ml-auto" : ""}>
                    <Button type="submit">
                      {step < 3 ? "Continue" : "Schedule Demo"}
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 bg-[#f0f4ff] rounded-xl p-6">
            <h2 className="text-xl font-semibold text-[#1a1d4e] mb-4">
              Free Trial Information
            </h2>
            <p className="text-gray-600 mb-4">
              Not ready for a demo yet? Try Osto.one free for 14 days with no
              commitment.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Full access to all core security modules
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Up to 10 users during trial period
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700">Email support included</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700">No credit card required</span>
              </li>
            </ul>
            <Button variant="outline">Start Free Trial</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
const securityModules = [
  "Endpoint Protection",
  "Network Security",
  "Cloud Security",
  "API Protection",
  "Web App Security",
  "Email Security",
  "Data Loss Prevention",
  "Compliance & Reporting",
  "Vulnerability Assessment",
  "Penetration Testing",
];
