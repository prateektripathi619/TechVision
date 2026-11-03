import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "Cloud & DevOps", href: "#services" },
    { label: "AI & ML Solutions", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Team", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
  ],
}

export function FooterSection() {
  return (
    <footer className="px-6 py-16 border-t border-white/10 bg-slate-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/30" />
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-display text-xl font-semibold text-white">
              Devcube
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              Expert technology solutions for modern businesses. Transform your digital vision.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Devcube. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
