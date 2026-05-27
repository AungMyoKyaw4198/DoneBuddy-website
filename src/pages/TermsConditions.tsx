import ScrollReveal from '../components/ui/ScrollReveal'
import { CONTACT_EMAIL } from '../lib/constants'

export default function TermsConditions() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <ScrollReveal>
        <h1 className="font-heading text-4xl font-bold text-brown">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-sm text-brown-light">
          Last updated: May 27, 2025
        </p>

        <div className="mt-8 space-y-6 text-brown-light leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-semibold text-brown">
              Acceptance of Terms
            </h2>
            <p className="mt-3">
              By accessing DoneBuddy&apos;s website or app, you agree to these
              placeholder terms. Replace this content with your finalized legal
              agreement before publishing.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-brown">
              Use of the Service
            </h2>
            <p className="mt-3">
              You agree to use DoneBuddy lawfully and not interfere with the
              service, other users, or our systems. We may update features or
              suspend access when necessary to protect the platform.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-brown">
              Intellectual Property
            </h2>
            <p className="mt-3">
              DoneBuddy branding, artwork, software, and content remain the
              property of DoneBuddy and its licensors unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-brown">
              Contact
            </h2>
            <p className="mt-3">
              Questions about these terms can be sent to{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-sage-dark hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </ScrollReveal>
    </div>
  )
}
