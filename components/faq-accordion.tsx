import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: 'How quickly can I start earning income as a mentor?',
    answer:
      'Many of our members sign their first paying mentee within 30–60 days of joining Mentor Academy. Our system is designed for rapid implementation, providing everything you need to attract and serve clients right away.',
  },
  {
    question:
      'Do I need business experience to build a successful mentorship practice?',
    answer: '',
  },
  {
    question:
      'What types of mentoring businesses can I build with your system?',
    answer: '',
  },
  {
    question:
      'Will you help me find clients for my mentorship business?',
    answer: '',
  },
];

export default function FaqAccordion() {
  return (
    <section className="bg-[#ECF0F5] rounded-3xl max-w-7xl mx-auto px-6 py-10 my-10">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-primary">FAQs:</h2>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-xl border-none bg-white overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-primary border-b border-b-secondary hover:no-underline hover:bg-muted transition-all data-[state=open]:shadow-sm">
              {faq.question}
            </AccordionTrigger>

            {faq.answer && (
              <AccordionContent className="px-6 pt-2 pb-4 text-sm bg-[#ECF0F5] border-none shadow-none text-foreground">
                {faq.answer}
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
