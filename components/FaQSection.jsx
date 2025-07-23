import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaQSection() {
  return (
    <div className="flex flex-col gap-3.5 items-center justify-center max-w-6xl max-h-[600px] mx-auto" id="faq">
      <h2 className="text-3xl md:text-4xl text-center font-extrabold mb-32 bg-gradient-to-tr from-slate-100 via-gray-200 to-zinc-400 bg-clip-text text-transparent border-b border-b-zinc-50 w-fit pb-3 mx-auto">
        Frequently Asked Questions
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-[80%] mx-auto"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Who can participate in the hackathon?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Anyone with a passion for technology! Whether you're a developer, designer, innovator, or student, you're welcome to join — solo or with a team.
            </p>
            <p>
              We encourage participation from all skill levels — from beginners to experienced professionals.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is there any registration fee?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              No, participation in the hackathon is completely free. However, registration is mandatory to secure your spot.
            </p>
            <p>
              We recommend registering early, as slots are limited.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What should I bring for the event?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Bring your laptop, charger, and any necessary hardware or devices you may need. A government-issued ID may be required at check-in.
            </p>
            <p>
              We'll take care of food, internet, and seating arrangements so you can focus on building.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>What are the judging criteria?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Projects will be judged based on creativity, technical complexity, impact, and overall presentation.
            </p>
            <p>
              Bonus points for innovative use of technology and addressing real-world problems.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
