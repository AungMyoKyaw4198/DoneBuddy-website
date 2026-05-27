import ScrollReveal from '../components/ui/ScrollReveal'
import LegalDocument from '../components/ui/LegalDocument'
import privacyPolicy from '../../PRIVACY_POLICY.md?raw'

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <ScrollReveal>
        <LegalDocument content={privacyPolicy} />
      </ScrollReveal>
    </div>
  )
}
