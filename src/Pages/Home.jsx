// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import LandingPage from '../Components/Home/Landingpage';
// import Courses from '../Components/Home/Courses';
// import LanguageNews from '../Components/Home/LanguageNews';
// import WhyChoose from '../Components/Home/Whychoose';
// import SignupSection from '../Components/Home/SignupSection';
// import HistudyNews from '../Components/Home/HistudyNews';
// import AboutUs from '../Components/Home/AboutUs';

// // Define animation variants
// const upAnimation = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1 } }
// };

// const downAnimation = {
//     hidden: { opacity: 0, y: -50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 2 } }
// };

// const flipAnimation = {
//     hidden: { opacity: 0, rotateY: 90 },
//     visible: { opacity: 1, rotateY: 0, transition: { duration: 1.5 } }
// };

// const AnimatedSection = ({ children, direction }) => {
//     const controls = useAnimation();
//     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 }); // updated to trigger once

//     useEffect(() => {
//         if (inView) {
//             controls.start("visible");
//         } else {
//             controls.start("hidden");
//         }
//     }, [controls, inView]);

//     const animationVariant =
//         direction === 'up' ? upAnimation :
//         direction === 'down' ? downAnimation :
//         direction === 'flip' ? flipAnimation : 
//         upAnimation; // default to upAnimation if no direction matches

//     return (
//         <motion.div ref={ref} initial="hidden" animate={controls} variants={animationVariant}>
//             {children}
//         </motion.div>
//     );
// };

// function Home() {
//     return (
//         <div>
//             <AnimatedSection direction="up"><LandingPage/></AnimatedSection>
//             <AnimatedSection direction="down"><Courses/></AnimatedSection>
//             <AnimatedSection direction="up"><LanguageNews/></AnimatedSection>
//             <AnimatedSection direction="flip"><WhyChoose/></AnimatedSection>
//             <AnimatedSection direction="up"><AboutUs/></AnimatedSection>
//             <AnimatedSection direction="up"><SignupSection/></AnimatedSection>
//             <AnimatedSection direction="down"><HistudyNews/></AnimatedSection>
//         </div>
//     );
// }

// export default Home;


import React from 'react';
import LandingPage from '../Components/Home/Landingpage';
import Courses from '../Components/Home/Courses';
import LanguageNews from '../Components/Home/LanguageNews';
import WhyChoose from '../Components/Home/Whychoose';
import SignupSection from '../Components/Home/SignupSection';
import HistudyNews from '../Components/Home/HistudyNews';
import AboutUs from '../Components/Home/AboutUs';

function Home() {
    return (
        <div>
            <LandingPage/>
            <Courses/>
            <LanguageNews/>
            <WhyChoose/>
            <AboutUs/>
            <SignupSection/>
            <HistudyNews/>
        </div>
    );
}

export default Home;


