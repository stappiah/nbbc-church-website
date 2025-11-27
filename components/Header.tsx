"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect, RefObject } from 'react'
import { NAV } from './NavList'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(navRef, () => setOpen(false))
  const pathname = usePathname()

  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-50 border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-0">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/Logo.png" alt="Grace Life Church Logo" className="h-10 w-auto" />
          <span className="text-lg font-display font-bold text-[#0B2944] tracking-tight">
            NBBC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === item.href
                  ? 'text-yellow-500'
                  : 'text-gray-700 hover:text-yellow-500'
              }`}
            >
              {item.title}
            </Link>
          ))}
          <Link href="/give" className="ml-3 px-4 py-2 rounded-full bg-yellow-500 text-white font-semibold hover:bg-yellow-400 transition">
            Give
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden relative" ref={navRef}>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            {/* Hamburger Icon */}
            <div className="relative w-6 h-6 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-[#0B2944] transform transition duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[#0B2944] transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[#0B2944] transform transition duration-300 ease-in-out ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>

          {/* Mobile Menu */}
          <div
            className={`absolute top-full right-0 w-64 bg-white shadow-lg rounded-b-xl border border-t-0 overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
              open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
            }`}
          >
            <div className="flex flex-col p-4 gap-2">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-2 px-3 rounded font-medium transition-colors duration-300 ${
                    pathname === item.href
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'hover:bg-yellow-50 text-gray-700'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="/give"
                className="mt-2 py-2 px-3 rounded-full bg-yellow-500 text-white font-semibold text-center hover:bg-yellow-400 transition"
                onClick={() => setOpen(false)}
              >
                Give
              </Link>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: Event) => void
) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
