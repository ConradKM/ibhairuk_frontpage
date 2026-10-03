// Everything on the FAQs page. Edit freely:
// - Add, remove or reorder sections and questions — the page follows this list.
// - An answer can be one string, or a list of strings to show as separate lines/paragraphs.

import { HOURS, INSTAGRAM_HANDLE, LOCATION, PHONE } from './business'

export type Faq = {
  question: string
  answer: string | string[]
}

export type FaqSection = {
  title: string
  faqs: Faq[]
}

export const FAQ_SECTIONS: FaqSection[] = [
  {
    title: 'Booking',
    faqs: [
      {
        question: 'When are appointments released?',
        answer: 'Appointments are released on the 20th of each month at 8pm.',
      },
      {
        question: 'Do I need to pay a deposit?',
        answer:
          'Yes — a 20% non-refundable deposit is required to secure every appointment. It is deducted from your balance.',
      },
      {
        question: 'Can I reschedule my appointment?',
        answer: [
          'You can reschedule once within the same month before you need to pay a new deposit.',
          'Please give at least 48 hours’ notice if you’d like to reschedule.',
        ],
      },
      {
        question: 'How do I cancel?',
        answer: 'Please give at least 48 hours’ notice if you need to cancel your appointment.',
      },
      {
        question: 'What happens if I cancel late or don’t show up?',
        answer:
          'No-shows and cancellations within 48 hours of the appointment will be required to pay 50% of the remaining balance.',
      },
      {
        question: 'What are premium slots?',
        answer: 'Slots after 6:00pm are premium slots, which incur a £15 fee.',
      },
    ],
  },
  {
    title: 'Before your appointment',
    faqs: [
      {
        question: 'Do my locs need to be washed before I arrive?',
        answer: [
          'Yes — please come with your locs washed, unless you’ve added a wash to your appointment.',
          'Wash your locs the day of, or the day before, your appointment. Otherwise your appointment will be cancelled.',
        ],
      },
      {
        question: 'How often should I be washing my locs?',
        answer: 'For hygiene purposes, you should be washing your locs every two weeks.',
      },
      {
        question: 'Can I use oils or creams before my appointment?',
        answer:
          'Please don’t use any oils or creams in your hair before your appointment, as this may affect your desired look.',
      },
      {
        question: 'Can I add a hair wash?',
        answer: 'Yes — hair washes can be added before your appointment.',
      },
      {
        question: 'My locs are long, or I have a lot of them. What should I do?',
        answer:
          'Any add-ons, such as locs past shoulder length or more than 120 locs, must be added on beforehand.',
      },
    ],
  },
  {
    title: 'On the day',
    faqs: [
      {
        question: 'Where are you located?',
        answer: `I’m based in ${LOCATION}. The address will be sent to you via email.`,
      },
      {
        question: 'How do I pay?',
        answer:
          'Please bring the exact amount in cash for your appointment, as I can’t guarantee that I’ll have change available.',
      },
      {
        question: 'What if I’m running late?',
        answer: [
          'Please arrive on time. I know things happen, but it’s essential to plan your journey carefully to make sure you arrive on time.',
          'All clients are given a 15-minute grace period. After this, a late fee applies automatically:',
          '15 mins late — £10',
          '25 mins late — £15',
          '30+ mins late — your appointment is cancelled',
        ],
      },
      {
        question: 'Can I bring someone with me?',
        answer: 'I kindly ask that you don’t bring any additional guests to your appointment.',
      },
    ],
  },
  {
    title: 'Hours & contact',
    faqs: [
      {
        question: 'What are your opening hours?',
        answer: HOURS.map((h) => `${h.days}: ${h.time}`),
      },
      {
        question: 'How can I get in touch?',
        answer: `Send me a message on Instagram at @${INSTAGRAM_HANDLE}, or call ${PHONE}.`,
      },
    ],
  },
]
