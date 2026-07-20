import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Badge from '../global/Badge';

const FAQ_ITEMS = [
  {
    question: 'How is FOUR different from other English learning apps?',
    answer: 'Unlike apps that throw endless vocabulary at you, FOUR creates a personalized path to your specific goal — whether that\'s passing an exam, acing a job interview, or presenting confidently. Everything you do on FOUR directly serves your ultimate result.',
  },
  {
    question: 'How does the AI adapt to my skill level?',
    answer: 'When you start, our AI assesses your current abilities through a quick diagnostic. It then dynamically adjusts lesson difficulty, conversation complexity, and practice frequency based on your performance. The more you learn, the smarter it gets.',
  },
  {
    question: 'How much time should I spend each day?',
    answer: 'We recommend 15-30 minutes daily for optimal results. The key is consistency, not intensity. FOUR\'s bite-sized lessons fit into any schedule, and our streak system keeps you motivated to show up every day.',
  },
  {
    question: 'Can I practice real conversations?',
    answer: 'Absolutely. FOUR features AI-powered conversation partners that simulate real-world scenarios — from ordering coffee to negotiating business deals. You get unlimited practice without judgment, with instant feedback on grammar, pronunciation, and fluency.',
  },
  {
    question: 'How do you track my progress?',
    answer: 'Your personal dashboard visualizes progress across four dimensions: vocabulary, grammar, speaking, and listening. You\'ll see improvement graphs, milestone achievements, and a clear roadmap of what to master next. No guesswork — just data-driven progress.',
  },
  {
    question: 'Is FOUR suitable for beginners?',
    answer: 'Yes! FOUR is designed for all levels — from absolute beginners to advanced learners. The AI adapts to your current level and grows with you. If you\'re a beginner, you\'ll start with foundational lessons and gradually advance as you build confidence.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
};

/**
 * FAQItem - Single accordion item.
 */
function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      style={{
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '20px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          gap: '16px',
          textAlign: 'left',
          color: isOpen ? 'var(--color-accent)' : '#fff',
          fontFamily: 'var(--font-heading)',
          fontSize: '17px',
          fontWeight: 600,
          transition: 'color 0.3s ease',
        }}
      >
        <span>{item.question}</span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ flexShrink: 0 }}
        >
          <path
            d="M5 8L10 13L15 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                color: 'var(--color-neutral-dark)',
                lineHeight: 1.8,
                paddingBottom: '20px',
                fontSize: '15px',
              }}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * FAQ - Accordion FAQ section.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="section"
      style={{
        background: 'var(--color-secondary)',
      }}
    >
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <Badge variant="neutral" size="md" style={{ marginBottom: '16px' }}>
            FAQ
          </Badge>
          <h2 className="section-title">
            Got{' '}
            <span className="gold-text">Questions?</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about the FOUR method.
          </p>
        </motion.div>

        <motion.div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: '16px',
            padding: '0 24px',
            border: '1px solid rgba(255,255,255,0.04)',
          }}
        >
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
