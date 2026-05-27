type PhoneMockupProps = {
  screenshotSrc: string
  screenshotAlt: string
  className?: string
}

export default function PhoneMockup({
  screenshotSrc,
  screenshotAlt,
  className = '',
}: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto w-[220px] md:w-[250px] ${className}`}>
      <div className="rounded-[2rem] border-[6px] border-brown/80 bg-brown/80 p-1 shadow-xl">
        <div className="overflow-hidden rounded-[1.6rem] bg-white">
          <div className="flex items-center justify-center bg-sage-light px-4 py-2">
            <div className="h-3 w-16 rounded-full bg-brown/10" />
          </div>
          <img
            src={screenshotSrc}
            alt={screenshotAlt}
            className="aspect-[9/19] w-full object-cover object-top"
          />
        </div>
      </div>
      <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-brown/80" />
    </div>
  )
}
