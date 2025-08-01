import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaQSection() {
 const faqData = [
  {
    question: 'Who can participate?',
    answer: 'Anyone with a passion for tech can participate — students from any college, developers, and designers are all welcome. Team size must be between 2 to 5 members.'
  },
  {
    question: 'Is there a registration fee?',
    answer: "Nope, it's completely free to participate! Just make sure you register beforehand to confirm your spot."
  },
  {
    question: 'Are inter-college teams allowed?',
    answer: 'Yes! You can team up with participants from different colleges, states, or even different domains. Collaboration is encouraged!'
  },
  {
    question: 'Can we use third-party APIs, open-source libraries, or AI tools like ChatGPT?',
    answer: 'Absolutely! You’re encouraged to use modern tools including APIs, open-source packages, or AI tools (like ChatGPT, Copilot, etc.) as long as your project is original and built during the hackathon.'
  },
  {
    question: 'What should I bring?',
    answer: 'Bring your laptop, charger, extension cord (if needed), ID card, and anything else you might need to work comfortably. We’ll provide internet, food, and workspace.'
  },
  {
    question: 'Are hardware-based projects allowed?',
    answer: 'Yes! You’re welcome to build hardware-based projects. Just bring the necessary components and inform us in advance if you need power supply or special arrangements.'
  },
  {
    question: 'How will projects be judged?',
    answer: 'Judging will be based on creativity, technical implementation, real-world impact, and how well you present your idea. Bonus points for innovation and usability!'
  },
  {
    question: 'Who do I contact for queries?',
    answer: 'You can reach out to us at nexverse.iitm@gmail.com or DM us on Instagram or LinkedIn @nexverseiitm. We’re happy to help!'
  }
];

  return (
    <div className="flex flex-col gap-3.5 items-center justify-center max-w-6xl max-h-[600px] mx-auto" id="faq">
      <h2 className="text-3xl md:text-4xl text-center font-extrabold mb-32 bg-gradient-to-tr from-slate-100 via-gray-200 to-zinc-400 bg-clip-text text-transparent border-b border-b-zinc-50 w-fit pb-3 mx-auto">
        Frequently Asked Questions
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-[90%] mx-auto"
      >
        {
          faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-gray-200 hover:text-white transition-colors duration-200">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))
        }

      </Accordion>
    </div>
  )
}
