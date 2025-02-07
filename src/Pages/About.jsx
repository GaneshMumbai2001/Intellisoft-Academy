import React from 'react';
import Landingpageabout from '../Components/About/landingpageabout';
import HowWeWork from '../Components/About/HowWeWork';
import AboutUsperson from '../Components/About/AboutUsperson';
import InspirationSection from '../Components/About/InspirationSection';
import NewsletterSection from '../Components/About/NewsletterSection';
import LearnersSay from '../Components/About/LearnersSay';

function About() {
    return (
        <>
            <Landingpageabout />
            <AboutUsperson />
            <HowWeWork 
                title="How Our Process Works"
                description="We guide you step-by-step through the process of achieving your dreams."
                buttonText="Start Today"
                videoUrl="/about/video.mp4"
                buttonLink="/process"
            />
            <LearnersSay />
            <InspirationSection />
            <NewsletterSection />
        </>
    );
}

export default About;




// import React, { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import Landingpageabout from '../Components/About/landingpageabout';
// import HowWeWork from '../Components/About/HowWeWork';
// import AboutUsperson from '../Components/About/AboutUsperson';
// import InspirationSection from '../Components/About/InspirationSection';
// import NewsletterSection from '../Components/About/NewsletterSection';
// import LearnersSay from '../Components/About/LearnersSay';

// // Define animation variants
// const upAnimation = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1 } }
// };

// const downAnimation = {
//     hidden: { opacity: 0, y: -50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1} }
// };

// const AnimatedSection = ({ children, direction }) => {
//     const controls = useAnimation();
//     const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

//     useEffect(() => {
//         if (inView) {
//             controls.start("visible");
//         }
//     }, [controls, inView]);

//     const animationVariant = direction === 'up' ? upAnimation : downAnimation;

//     return (
//         <motion.div ref={ref} initial="hidden" animate={controls} variants={animationVariant}>
//             {children}
//         </motion.div>
//     );
// };

// function About() {
//     return (
//         <>
//             <AnimatedSection direction="up"><Landingpageabout /></AnimatedSection>
//             <AnimatedSection direction="down"><AboutUsperson /></AnimatedSection>
//             <AnimatedSection direction="up">
//                 <HowWeWork 
//                     title="How Our Process Works"
//                     description="We guide you step-by-step through the process of achieving your dreams."
//                     buttonText="Start Today"
//                     videoUrl="/about/video.mp4"
//                     buttonLink="/process"
//                 />
//             </AnimatedSection>
//             <AnimatedSection direction="down"><LearnersSay /></AnimatedSection>
//             <AnimatedSection direction="up"><InspirationSection /></AnimatedSection>
//             <AnimatedSection direction="up"><NewsletterSection /></AnimatedSection>
//         </>
//     );
// }

// export default About;

