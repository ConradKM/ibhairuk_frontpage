import AnimatedText from '../components/AnimatedText'
import BookButton from '../components/BookButton'
import Container from '../components/Container'
import FaqItem from '../components/FaqItem'
import Reveal from '../components/Reveal'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE, PHONE_LINK } from '../content/business'
import { FAQ_SECTIONS } from '../content/faqs'
import { btnGhost, btnPrimary, eyebrow, script, serifCaps } from '../lib/styles'

export default function FAQs() {
  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Container>
        <div className="text-center">
          <p className={eyebrow}>Please read before booking</p>
          <h1 className="mt-4 leading-none">
            <span className={`${serifCaps} text-3xl sm:text-5xl`}>
              <AnimatedText text="Frequently asked" />
            </span>{' '}
            <span className={`${script} text-6xl sm:text-8xl`}>
              <AnimatedText text="Questions" delay={250} />
            </span>
          </h1>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-14 lg:mt-20">
          {FAQ_SECTIONS.map((section) => (
            <Reveal key={section.title}>
              <h2 className={`${serifCaps} text-2xl sm:text-3xl`}>{section.title}</h2>
              <div className="mt-4 border-t border-white/15">
                {section.faqs.map((faq) => (
                  <FaqItem key={faq.question} faq={faq} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 border-t border-white/10 pt-16 text-center">
          <h2 className={`${script} text-5xl sm:text-6xl`}>Still have a question?</h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-7 text-white/70">
            Send me a message on Instagram or give me a call — I’m happy to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={INSTAGRAM_URL} className={btnGhost}>
              @{INSTAGRAM_HANDLE}
            </a>
            <a href={PHONE_LINK} className={btnGhost}>
              {PHONE}
            </a>
            <BookButton className={btnPrimary}>Book appointment</BookButton>
          </div>
        </Reveal>
      </Container>
    </div>
  )
}
