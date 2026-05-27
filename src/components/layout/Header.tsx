import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, PawPrint, X } from 'lucide-react'
import Logo from '../ui/Logo'
import HoverScale from '../ui/HoverScale'
import { navLinks } from '../../lib/constants'

function getLinkClass(isActive: boolean) {
  return `rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-sage-dark ${
    isActive ? 'text-sage-dark' : 'text-brown-light'
  }`
}

function DesktopNavLink({ href, label }: { href: string; label: string }) {
  const { pathname } = useLocation()
  const isActive = href === '/' ? pathname === '/' : pathname === href

  if (href.startsWith('/#')) {
    return (
      <a href={href} className={getLinkClass(false)}>
        {label}
      </a>
    )
  }

  return (
    <Link to={href} className={getLinkClass(isActive)}>
      {label}
    </Link>
  )
}

function MobileNavLink({
  href,
  label,
  onNavigate,
}: {
  href: string
  label: string
  onNavigate: () => void
}) {
  const className =
    'rounded-xl px-3 py-3 text-brown-light hover:bg-sage-light hover:text-sage-dark'

  if (href.startsWith('/#')) {
    return (
      <a href={href} className={className} onClick={onNavigate}>
        {label}
      </a>
    )
  }

  return (
    <Link to={href} className={className} onClick={onNavigate}>
      {label}
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brown/5 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link to="/" aria-label="DoneBuddy home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <DesktopNavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="hidden lg:block">
          <HoverScale>
            <a
              href="/#download"
              className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-sage-dark"
            >
              <PawPrint className="h-4 w-4" aria-hidden="true" />
              Download App
            </a>
          </HoverScale>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-brown lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-brown/5 px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <MobileNavLink
                key={link.href}
                {...link}
                onNavigate={closeMenu}
              />
            ))}
            <a
              href="/#download"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-semibold text-white"
            >
              <PawPrint className="h-4 w-4" />
              Download App
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
