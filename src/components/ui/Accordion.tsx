import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
}

export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? items[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="divide-y divide-[#f5efe2]/12 rounded-2xl border border-[#f5efe2]/15 bg-[#090b0f]/75 backdrop-blur-xl shadow-soft">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `accordion-panel-${item.id}`;
        const buttonId = `accordion-button-${item.id}`;

        return (
          <div key={item.id} className="px-6 py-1">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-[#f5efe2] transition-colors hover:text-white sm:text-lg"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#f5efe2]/60 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#f5efe2]' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 pr-8 text-sm leading-relaxed text-[#f5efe2]/72 sm:text-base"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
