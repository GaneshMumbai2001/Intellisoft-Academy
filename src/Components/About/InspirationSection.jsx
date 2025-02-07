import React from 'react';
import { motion } from 'framer-motion';
import ins1 from '/about/ins1.png'; 
import ins2 from '/about/ins2.png';
import ins3 from '/about/ins3.png';
import ins4 from '/about/ins4.png'; 
import ins5 from '/about/ins5.png';
import ins6 from '/about/ins6.png';

const inspirationData = [
  { img: ins1, name: 'Alexendra Scott', title: 'Creative Developer', location: 'USA' },
  { img: ins2, name: 'Alexendra Scott', title: 'Creative Developer', location: 'USA' },
  { img: ins3, name: 'Alexendra Scott', title: 'Creative Developer', location: 'USA' },
  { img: ins4, name: 'John Brawn', title: 'WordPress Developer', location: 'USA' },
  { img: ins5, name: 'Mames Mary', title: 'English Teacher', location: 'CO Miego, AD, USA' },
  { img: ins6, name: 'AMR. John', title: 'WordPress Developer', location: 'UAE' },
];

const InspirationSection = () => {
  return (
    <motion.div 
      className="inspiration-box py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <motion.div 
          className="text-[10.17px] text-pink-500 bg-pink-200 inline-block px-4 py-2 rounded-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span>Skill Teacher</span>
        </motion.div>
      </div>

      <motion.p 
        className="text-center text-[31.84px] font-bold mt-6 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Whose Inspirations You Love.
      </motion.p>
      <motion.div 
        className="inspiration-container w-full sm:w-[70%] mx-auto text-center px-4 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-[14.88px] text-gray-600">
          Far far away, behind the word mountains, far from the countries Vokalia and
          Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
          right at the coast of the Semantics, a large language ocean.
        </p>
      </motion.div>

      <div className="inspiration-container flex flex-wrap justify-center gap-8">
        {inspirationData.map((inspiration, index) => (
          <motion.div 
            key={index} 
            className="inspiration-card bg-white rounded-lg shadow-lg p-4 w-full sm:w-1/3 md:w-1/4 transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="img-pro mb-4">
              <img src={inspiration.img} alt={`Inspiration ${index + 1}`} className="w-full h-auto rounded-md" />
            </div>
            <div className="contents-ins text-center">
              <div className="name-ins text-[25.1px] font-bold text-gray-900">{inspiration.name}</div>
              <p className="text-[13.5px] font-medium text-gray-600">{inspiration.title}</p>
              <span className="text-[10.5px] text-gray-500">{inspiration.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InspirationSection;
