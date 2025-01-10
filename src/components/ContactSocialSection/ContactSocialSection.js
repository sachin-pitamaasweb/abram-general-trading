"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Twitter, Youtube, CheckCircle } from 'lucide-react'

export default function ContactSocialSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Ask Your Question Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Ask Your Question</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Your name"
                className="w-full"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address"
                  }
                })}
                placeholder="Your email"
                className="w-full"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile No.
              </label>
              <Input
                id="mobile"
                type="tel"
                {...register("mobile", { 
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid mobile number"
                  }
                })}
                placeholder="Your mobile number"
                className="w-full"
              />
              {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                placeholder="Your message"
                className="w-full h-32"
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-[#FCCD4E] text-white py-2 px-4 rounded-md hover:bg-[#FCCD4E] transition-colors"
            >
              Submit
            </button>
          </form>
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-lg flex items-center space-x-2"
              >
                <CheckCircle className="w-6 h-6" />
                <span>Form submitted successfully!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Our Socials */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Our Socials</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                <Instagram className="w-6 h-6" />
              </div>
              <span>Instagram</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                <Facebook className="w-6 h-6" />
              </div>
              <span>Facebook</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                <Youtube className="w-6 h-6" />
              </div>
              <span>YouTube</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                <Twitter className="w-6 h-6" />
              </div>
              <span>X</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
