"use client"

import Link from 'next/link'
import { useState } from 'react'

const QUICK_LINKS = [
  { href: "/about", title: "About Us" },
  { href: "/ministries", title: "Ministries" },
  { href: "/events", title: "Events" },
  { href: "/sermons", title: "Sermons" },
  { href: "/give", title: "Give" }
];

const SOCIAL_LINKS = [
  {
    href: "#",
    label: "Facebook",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
  },
  {
    href: "#",
    label: "Twitter",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>,
  },
  {
    href: "#",
    label: "Instagram",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
  }
];

export default function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    alert(`Thank you for subscribing with ${email}!`)
    setEmail('')
  }

  return (
    <footer className="bg-gray-800 text-gray-300 mt-16">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/Logo.png" alt="New Breed Bible Church Logo" className="h-10 w-auto" />
            <span className="text-lg font-display font-bold text-white tracking-tight">
              New Breed Bible Church
            </span>
          </Link>
          <p className="text-sm mt-4 text-gray-400">
            A community of faith, hope & joy. Join us for worship, service, and
            community.
          </p>
          <div className="mt-6">
            <h4 className="font-semibold text-white mb-3">Connect With Us</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <Link key={social.label} href={social.href} aria-label={social.label} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors duration-300">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
          <p className="text-sm">123 Faith Lane, Takoradi, Ghana</p>
          <p className="text-sm mt-2">Phone: +233 55 187 8700</p>
          <p className="text-sm mt-2">Email: hello@gracelife.church</p>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-semibold text-white mb-4">Our Newsletter</h4>
          <p className="text-sm">Subscribe to get our latest news and updates.</p>
          <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row gap-2">
            <input 
              aria-label="Email address" 
              placeholder="Your email" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-3 py-2 rounded-lg border-gray-600 bg-gray-700 text-white w-full text-sm focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 outline-none transition-shadow"
            />
            <button type="submit" className="px-5 py-2 rounded-lg bg-yellow-500 text-white font-semibold text-sm whitespace-nowrap hover:bg-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <span>© {year} New Breed Bible Church. All rights reserved.</span>
          <span className="mt-2 md:mt-0">Built with love • Accessibility friendly</span>
        </div>
      </div>
    </footer>
  )
}
