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

