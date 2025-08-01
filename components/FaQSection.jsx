import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaQSection() {
  const faqData = [
    {
      question: 'Are inter-college teams allowed?',
      answer: 'Yes, inter-college teams are allowed'
    },
    {
      question: 'Will there be wifi at the venue?',
      answer: "Yes, of course (even we can't survive without internet 😭)"
    },
    {
      question: 'Who can participate?',
      answer: "Anyone with a passion for tech — students, developers, designers. Team size: minimum 2, maximum 5."
    },
    {
      question: 'What should I bring?',
      answer: "Bring your laptop, charger, any necessary software tools, and a collaborative spirit. We'll handle food and seating."
    },
    {
      question: 'Is there a registration fee?',
      answer: "No, it's completely free! But registration is mandatory."
    },
    {
      question: 'How will projects be judged?',
      answer: "Projects will be judged on creativity, technical complexity, impact, and presentation."
    },
    {
      question: "It is my first hackathon, what's something I should know?",
      answer: "Hackathons are not only meant for winning (although that is the goal) but they provide you with so many networking opportunities (our community core members met in hacks too). Win or lose you'll definitely learn something, so come from a learning mindset and you will have fun along the way (we promise)"
    }
  ]
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
