import ScrollReveal from '../components/ui/ScrollReveal'
import { CONTACT_EMAIL } from '../lib/constants'

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <ScrollReveal>
        <h1 className="font-heading text-4xl font-bold text-brown">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-brown-light">
          Last updated: May 27, 2025
        </p>

        <div className="mt-8 space-y-6 text-brown-light leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-semibold text-brown">
              Overview
            </h2>
            <p className="mt-3">
              DoneBuddy respects your privacy. This placeholder policy outlines
              how we intend to handle information when you use our website and
              mobile app. Replace this page with your final legal text before
              launch.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-brown">
              Information We Collect
            </h2>
            <p className="mt-3">
              We may collect account details, habit activity, device information,
              and support communications necessary to operate the service and
              improve your experience.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-brown">
              How We Use Information
            </h2>
            <p className="mt-3">
              Information is used to provide core app functionality, personalize
              your experience, send optional reminders, maintain security, and
              respond to support requests.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-brown">
              Contact
            </h2>
            <p className="mt-3">
              Privacy questions can be sent to{' '}
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
