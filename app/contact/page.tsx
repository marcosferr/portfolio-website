"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"
import portfolioData from "@/data/portfolio-data.json"

export default function Contact() {
  const { contact } = portfolioData

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="bg-[#1e1e1e] rounded-xl p-6 mb-6">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        Contact Me
        <span className="h-1 w-10 bg-orange-500 ml-4 rounded-full"></span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-6">{contact.intro}</p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#252525] flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-orange-500" />
              </div>
              <div>
                <h3 className="font-medium">Mail Me</h3>
                <p className="text-gray-400">{contact.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#252525] flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-orange-500" />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-gray-400">{contact.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#252525] border border-[#333] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#252525] border border-[#333] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#252525] border border-[#333] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-[#252525] border border-[#333] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-70"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>

            {submitSuccess && (
              <div className="p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                Your message has been sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

