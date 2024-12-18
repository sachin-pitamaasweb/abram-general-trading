import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function ContactSocialSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Ask Your Question Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Ask Your Question</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input id="name" placeholder="Your name" className="w-full" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input id="email" type="email" placeholder="Your email" className="w-full" />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile No.
              </label>
              <Input id="mobile" type="tel" placeholder="Your mobile number" className="w-full" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea id="message" placeholder="Your message" className="w-full h-32" />
            </div>
          </form>
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

