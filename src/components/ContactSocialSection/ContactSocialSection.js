// "use client"

// import { useState } from "react"
// import { useForm } from "react-hook-form"
// import { motion, AnimatePresence } from "framer-motion"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Facebook, Instagram, Twitter, Youtube, CheckCircle } from 'lucide-react'

// export default function ContactSocialSection() {
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const { register, handleSubmit, formState: { errors }, reset } = useForm()

//   const onSubmit = async (data) => {
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     setIsSubmitted(true)
//     reset()
//     setTimeout(() => setIsSubmitted(false), 3000)
//   }

//   return (
//     <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 bg-gray-50">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//         {/* Ask Your Question Form */}
//         <div className="space-y-6">
//           <h2 className="text-2xl font-semibold">Ask Your Question</h2>
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                 Name
//               </label>
//               <Input
//                 id="name"
//                 {...register("name", { required: "Name is required" })}
//                 placeholder="Your name"
//                 className="w-full"
//               />
//               {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                 Email
//               </label>
//               <Input
//                 id="email"
//                 type="email"
//                 {...register("email", { 
//                   required: "Email is required",
//                   pattern: {
//                     value: /\S+@\S+\.\S+/,
//                     message: "Invalid email address"
//                   }
//                 })}
//                 placeholder="Your email"
//                 className="w-full"
//               />
//               {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
//             </div>
//             <div>
//               <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
//                 Mobile No.
//               </label>
//               <Input
//                 id="mobile"
//                 type="tel"
//                 {...register("mobile", { 
//                   required: "Mobile number is required",
//                   pattern: {
//                     value: /^[0-9]{10}$/,
//                     message: "Invalid mobile number"
//                   }
//                 })}
//                 placeholder="Your mobile number"
//                 className="w-full"
//               />
//               {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile.message}</p>}
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                 Message
//               </label>
//               <Textarea
//                 id="message"
//                 {...register("message", { required: "Message is required" })}
//                 placeholder="Your message"
//                 className="w-full h-32"
//               />
//               {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-[#FCCD4E] text-white py-2 px-4 rounded-md hover:bg-[#FCCD4E] transition-colors"
//             >
//               Submit
//             </button>
//           </form>
//           <AnimatePresence>
//             {isSubmitted && (
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -50 }}
//                 className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-lg flex items-center space-x-2"
//               >
//                 <CheckCircle className="w-6 h-6" />
//                 <span>Form submitted successfully!</span>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Our Socials */}
//         <div className="space-y-6">
//           <h2 className="text-2xl font-semibold">Our Socials</h2>
//           <div className="space-y-4">
//             <div className="flex items-center space-x-4">
//               <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
//                 <Instagram className="w-6 h-6" />
//               </div>
//               <span>Instagram</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
//                 <Facebook className="w-6 h-6" />
//               </div>
//               <span>Facebook</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
//                 <Youtube className="w-6 h-6" />
//               </div>
//               <span>YouTube</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
//                 <Twitter className="w-6 h-6" />
//               </div>
//               <span>X</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Custom X icon component
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  mobile: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must not exceed 500 characters."),
});

export default function ContactSocialSection() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  // Handle form submission
  async function onSubmit(values) {
    try {
      alert("Your message has been sent successfully.");
      form.reset();
    } catch (error) {
      console.error("Error: Something went wrong.");
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="w-full bg-gray-50/50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Ask Your Question Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-medium">Ask Your Question</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" className="bg-white border-gray-200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" type="email" className="bg-white border-gray-200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile No.</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your mobile number" className="bg-white border-gray-200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter your message" className="min-h-[120px] bg-white border-gray-200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>

        {/* Our Socials Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-medium">Our Socials</h2>
          <div className="space-y-8">
            <a href="#" className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg">
                <Instagram className="w-5 h-5" />
              </div>
              <span>Instagram</span>
            </a>
            <a href="#" className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg">
                <Facebook className="w-5 h-5" />
              </div>
              <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg">
                <Youtube className="w-5 h-5" />
              </div>
              <span>YouTube</span>
            </a>
            <a href="#" className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg">
                <XIcon />
              </div>
              <span>X</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
