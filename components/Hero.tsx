'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="min-h-screen pt-20 bg-[#FFF5F0]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl font-bold leading-tight mb-8 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Customer Success
            <br />
            Specialist{' '}
            <motion.span 
              className="bg-[#00A6B2] text-white px-4 py-2 rounded-lg inline-block my-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Empowering through
              <br />
              AI Innovation
            </motion.span>
          </motion.h1>

          <div className="space-y-4 mb-8">
            {[
              "Drive customer satisfaction and success",
              "Leverage AI to enhance customer experience",
              "Develop and maintain strong client relationships",
              "Implement data-driven success strategies"
            ].map((text, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ x: 10 }}
              >
                <svg className="w-6 h-6 text-[#00A6B2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span className="text-lg text-gray-700">{text}</span>
              </motion.div>
            ))}
          </div>

          <motion.button 
            onClick={() => window.open('https://stevdomain.notion.site/HelloGovAI-Customer-Success-Specialist-1859a5618d9280a1b8a2fe20f3485297?pvs=4', '_blank')}
            className="bg-[#00A6B2] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 hover:bg-[#008C96] transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Access</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>

          <motion.p 
            className="text-sm text-gray-600 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Ready to elevate your AI experience? I'm here to guide you every step of the way.
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <iframe
              className="w-full h-full object-cover rounded-lg"
              src="https://www.youtube.com/embed/ldws5V8yNnE"
              title="Customer Success Specialist Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 