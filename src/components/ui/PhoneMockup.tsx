type PhoneMockupProps = {
  screenshotSrc: string
  screenshotAlt: string
  className?: string
  size?: 'sm' | 'md'
}

const widthClasses = {
  sm: 'w-[9.5rem] sm:w-[10.5rem] md:w-[11.5rem]',
  md: 'w-[11.5rem] md:w-[12.5rem] lg:w-[13.5rem]',
} as const

export default function PhoneMockup({
  screenshotSrc,
  screenshotAlt,
  className = '',
  size = 'md',
}: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto ${widthClasses[size]} ${className}`}>
      <div className="rounded-[1.75rem] border-[5px] border-brown/80 bg-brown/80 p-1 shadow-xl sm:rounded-[2rem] sm:border-[6px]">
        <div className="overflow-hidden rounded-[1.35rem] bg-white sm:rounded-[1.6rem]">
          <div className="flex items-center justify-center bg-sage-light px-3 py-1.5 sm:px-4 sm:py-2">
            <div className="h-2.5 w-12 rounded-full bg-brown/10 sm:h-3 sm:w-16" />
          </div>
          <div className="aspect-[9/19] w-full bg-sage-light/40">
            <img
              src={screenshotSrc}
              alt={screenshotAlt}
              className="h-full w-full object-contain object-top"
            />
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 h-4 w-20 -translate-x-1/2 rounded-b-2xl bg-brown/80 sm:h-5 sm:w-24" />
    </div>
  )
}
