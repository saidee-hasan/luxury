import React from 'react';
import { motion } from 'framer-motion';

function Faqs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const bounce = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="mx-auto text-white px-4 py-12 mt-10">
      {/* Animated Header Section */}
      <motion.div 
        className="bg-blue-800 h-32 text-center py-5"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.h1 
          className="text-3xl font-bold mb-6 text-accent"
          variants={fadeIn}
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p 
          className="mb-8 text-center mx-auto justify-center"
          variants={fadeIn}
        >
          Don't see your question?{' '}
          <motion.span 
            className="cursor-pointer hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Click here to contact us!
          </motion.span>
        </motion.p>
      </motion.div>

      {/* FAQ Content */}
      <motion.div 
        className="border-t border-b border-gray-200 py-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2 
          className="text-2xl text-black text-center font-semibold mb-6"
          variants={bounce}
        >
          Frequently asked questions
        </motion.h2>
        
        <motion.div 
          className="space-y-4 text-black mx-auto w-full md:w-6/12"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {[
            {
              question: "How do I create an account?",
              answer: "Click the 'Sign Up' button in the top right corner and follow the registration process."
            },
            {
              question: "I forgot my password. What should I do?",
              answer: "Click on 'Forgot Password' on the login page and follow the instructions sent to your email."
            },
            {
              question: "How do I update my profile information?",
              answer: "Go to 'My Account' settings and select 'Edit Profile' to make changes."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, PayPal, and bank transfers."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="collapse collapse-arrow bg-base-100 border border-base-300"
              variants={fadeIn}
              whileHover={{ scale: 1.01 }}
            >
              <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
              <motion.div 
                className="collapse-title font-semibold"
                whileHover={{ color: '#3b82f6' }}
              >
                {item.question}
              </motion.div>
              <motion.div 
                className="collapse-content text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {item.answer}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Faqs;