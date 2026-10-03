export default function Logo({ className = '' }: { className?: string }) {
  return <img src="/images/logo.png" alt="IBHairUK" className={`block h-auto ${className}`} />
}
