import { useId, useState } from 'react'
import type { Faq } from '../content/faqs'
import { PlusIcon } from './icons'

export default function FaqItem({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const paragraphs = Array.isArray(faq.answer) ? faq.answer : [faq.answer]

  return (
    <div className="border-b border-white/15">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-sm tracking-[0.12em] uppercase transition-colors hover:text-white sm:text-[15px]"
        >
          <span className={open ? 'text-white' : 'text-white/85'}>{faq.question}</span>
          <PlusIcon
            className={`h-5 w-5 shrink-0 text-white/70 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          />
        </button>
      </h3>
      {/* Animating grid rows from 0fr to 1fr gives a smooth open/close at any answer height. */}
      <div
        id={id}
        role="region"
        className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        inert={!open}
      >
        <div className="overflow-hidden">
          <div className="space-y-2 pr-10 pb-6 text-[15px] leading-7 text-white/70">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
