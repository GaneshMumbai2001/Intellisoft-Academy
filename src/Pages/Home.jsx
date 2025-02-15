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


