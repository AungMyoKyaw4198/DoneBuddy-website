import ScrollReveal from '../components/ui/ScrollReveal'
import LegalDocument from '../components/ui/LegalDocument'
import termsOfService from '../../TERMS_OF_SERVICE.md?raw'

export default function TermsConditions() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <ScrollReveal>
        <LegalDocument content={termsOfService} />
      </ScrollReveal>
    </div>
  )
}
