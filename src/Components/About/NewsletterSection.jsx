import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const NewsletterSection = ({
  title = "Subscribe Our Newsletter",
  description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam explicabo sit est eos earum reprehenderit inventore nam autem corrupti rerum!",
  disclaimer = "No ads, No trials, No commitments",
  stats = [
    { count: "500+", label: "Successfully Trained", subText: "Learners & counting" },
    { count: "100+", label: "Certification Students", subText: "Online Course" },
  ]
}) => {
  return (
    <motion.div 
      className="newsletter bg-blue-700 text-white text-center py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="newsletter-content">
        <motion.div className="btn-update" variants={fadeInLeft}>
          <button className="update text-[9.84px] font-bold uppercase tracking-wide px-[15px] py-[8px] rounded-2xl bg-[#04040437]">
            GET LATEST INTELLISOFT UPDATE
          </button>
        </motion.div>
        
        <motion.h2 className="newsletter-heading text-[32.23px] font-bold mb-4" variants={fadeInUp}>
          {title}
        </motion.h2>
        
        <motion.div className="flex justify-center items-center" variants={fadeInUp}>
          <p className="description w-1/2 text-center text-[13.39px]">{description}</p>
        </motion.div>
        
        <motion.p className="disclaimer text-[10.5px] mb-10 text-gray-300" variants={fadeInUp}>
          {disclaimer}
        </motion.p>
        
        <div className="stats flex justify-center gap-12 mt-8 flex-wrap">
          <motion.div className="stat text-center max-w-xs" variants={fadeInUp}>
            <h3 className="count text-[35.45px] font-bold">{stats[0].count}</h3>
            <p className="stat-text text-[14.53px] mt-3 font-semibold">{stats[0].label}</p>
            <p className="sub-text text-[12px] mt-1">{stats[0].subText}</p>
          </motion.div>
          
          <div className="line-cen-news bg-gray-500 opacity-50 w-px h-32 mx-10 hidden sm:block"></div>
          
          <motion.div className="stat text-center max-w-xs" variants={fadeInUp}>
            <h3 className="count text-[35.45px] font-bold">{stats[1].count}</h3>
            <p className="stat-text text-[14.53px] mt-3 font-semibold">{stats[1].label}</p>
            <p className="sub-text text-[12px] mt-1">{stats[1].subText}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsletterSection;
