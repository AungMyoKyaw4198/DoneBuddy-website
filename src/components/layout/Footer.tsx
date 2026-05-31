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
    <footer className="border-t border-outline-variant/40 bg-surface-container-low">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-surface-variant">
              Build habits, raise happiness. You and your pet, growing together.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-primary-fixed px-3 py-1.5 font-label text-xs font-semibold text-primary-dark transition hover:bg-primary-fixed-dim/60"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-on-surface">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      className="text-sm text-on-surface-variant hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-on-surface-variant hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-on-surface">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-on-surface-variant hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-on-surface">
              Contact
            </h3>
            <p className="mt-4 text-sm text-on-surface-variant">
              Questions or feedback? We would love to hear from you.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-2 inline-block text-sm font-semibold text-primary hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-outline-variant/40 pt-6 text-center text-sm text-on-surface-variant">
          © {new Date().getFullYear()} DoneBuddy. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
