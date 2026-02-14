import Modal from "@/components/ui/modal";
import { HIGHLIGHTS } from "@/constant";
import { IAboutModalProps } from "@/lib/types";

export default function AboutModal({ isOpen, onClose }: IAboutModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="About this project"
      titleId="about-modal-title"
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6">
        <section className="flex flex-col items-center justify-center gap-1">
          <a
            href="https://tusharbhatt.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block hover:text-white font-bold transition text-neutral-300"
          >
            Crafted by Tushar Bhatt
          </a>
          <a
            href="https://github.com/TusharBhatt1/cookbook"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-neutral-400 underline underline-offset-2 transition hover:text-white"
          >
            View source on GitHub
          </a>
        </section>
        {HIGHLIGHTS.map((block) => (
          <section key={block.title}>
            <h3 className="text-sm font-semibold text-white">{block.title}</h3>
            <ul
              className={`mt-2 list-inside list-disc space-y-1.5 text-sm text-neutral-300 ${block.title === "Tech stack" ? "grid grid-cols-2" : ""}`}
            >
              {block.items.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-2 text-sm text-neutral-300"
                >
                  <Icon className="mt-0.5 size-5 text-red-200 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Modal>
  );
}
