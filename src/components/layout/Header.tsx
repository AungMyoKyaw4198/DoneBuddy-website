import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, PawPrint, X } from 'lucide-react'
import Logo from '../ui/Logo'
import HoverScale from '../ui/HoverScale'
import { navLinks } from '../../lib/constants'

function getLinkClass(isActive: boolean) {
  return `rounded-full px-3 py-2 font-label text-sm font-semibold transition-colors hover:text-primary ${
    isActive ? 'text-primary' : 'text-on-surface-variant'
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
    'rounded-xl px-3 py-3 text-on-surface-variant hover:bg-surface-container-low hover:text-primary'

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

const downloadButtonClass =
  'inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-label text-sm font-bold text-on-primary btn-tactile'

export default function Header() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/40 bg-surface/90 backdrop-blur-md">
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
            <a href="/#download" className={downloadButtonClass}>
              <PawPrint className="h-4 w-4" aria-hidden="true" />
              Download App
            </a>
          </HoverScale>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-on-surface lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-outline-variant/40 px-4 py-4 lg:hidden"
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
            <a href="/#download" onClick={closeMenu} className={`mt-2 justify-center ${downloadButtonClass}`}>
              <PawPrint className="h-4 w-4" />
              Download App
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
