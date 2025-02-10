import React from "react";
// import { useState } from "react";
// import Nav from "../Components/Landing/Nav.jsx/Nav";
import Hero from "../Components/Landing/Hero";
import Categories from "../Components/Landing/Categories";
import Popular from "../Components/Landing/Popular";
import LearnPlatform from "../Components/Landing/LearnPlatform";
import Education from "../Components/Landing/Education"
import Events from "../Components/Landing/Events"
import Teacher from "../Components/Landing/Teacher";
import Posts from "../Components/Landing/Posts"
import Subscribe from "../Components/Landing/Subscribe"
// import Footer from "../Components/Landing/Footer"
// import SideBar from "../Components/Landing/SideBar"


const Landing =()=>{
    const [menu, setMenu] = React.useState(false);


    return (
        <div>
            {/* <Nav menu={menu} setMenu={setMenu} /> */}
            <Hero />
            <Categories />
            <Popular />
            <LearnPlatform />
            <Education />
            <Events />
            <Teacher/>
            <Posts />
            <Subscribe />
            {/* <Footer />
            {menu && <SideBar menu={menu} setMenu={setMenu}/>} */}
        </div>
    )
}


export default Landing;