import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'
import {
  CONTACT_EMAIL,
  footerLegalLinks,
  footerNavLinks,
  socialLinks,
} from '../../lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-brown/5 bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brown-light">
              Build habits, raise happiness. You and your pet, growing together.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-sage-light px-3 py-1.5 text-xs font-semibold text-sage-dark transition hover:bg-sage/20"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-brown">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      className="text-sm text-brown-light hover:text-sage-dark"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-brown-light hover:text-sage-dark"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-brown">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-brown-light hover:text-sage-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-brown">
              Contact
            </h3>
            <p className="mt-4 text-sm text-brown-light">
              Questions or feedback? We would love to hear from you.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-2 inline-block text-sm font-semibold text-sage-dark hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-brown/5 pt-6 text-center text-sm text-brown-light">
          © {new Date().getFullYear()} DoneBuddy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
