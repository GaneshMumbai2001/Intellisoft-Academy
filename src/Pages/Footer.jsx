import React from "react";

const Footer = () => {
  const usefulLinks = [
    "Marketplace",
    "Gym Coachings",
    "Kindergarden",
    "University",
    "About Us",
  ];
  const companyLinks = [
    "Contact Us",
    "Technology",
    "Instructor",
    "Pricing",
    "Service",
  ];
  const legalLinks = [
    "Terms of service",
    "Privacy Policy",
    "Subscription",
    "Login & Register",
  ];

  const FooterLinkSection = ({ title, links }) => (
    <div className="flex flex-col justify-center pt-6 max-w-[217px]">
      <div className="text-sm font-bold text-gray-800">{title}</div>
      <div className="mt-4 text-base text-gray-500">
        {links.map((link, index) => (
          <div key={index} className="mt-2 first:mt-0 whitespace-nowrap">
            {link}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col bg-white items-center">
      <div className="flex flex-wrap justify-center w-full gap-24 py-10">
        <div className="flex flex-col items-start max-w-[301px] text-center">
          <img
            src="public/navbar/intellisoft.png"
            alt="Company Logo"
            className="w-[114px] object-contain"
          />
          <p className="mt-4 text-xs text-gray-500">
            We're always in search for talented and motivated people. Don't be
            shy introduce yourself!
          </p>
          <button className="mt-4 px-5 py-2 border-2 rounded-full shadow-md text-gray-800 bg-white">
            Contact With Us
          </button>
        </div>
        <FooterLinkSection title="Useful Links" links={usefulLinks} />
        <FooterLinkSection title="Our Company" links={companyLinks} />
        <div className="flex flex-col  pt-6 max-w-[217px] text-gray-500">
          <div className="text-base font-bold text-gray-800">Get Contact</div>
          <div className="mt-4 text-base">
            <p className="text-xs font-medium">
              Phone: <a href="tel:(406) 555-0120">(406) 555-0120</a>
            </p>
            <p className="text-xs font-medium mt-2">
              E-mail:{" "}
              <a href="mailto:rainbow@example.com">rainbow@example.com</a>
            </p>
            <p className="mt-2 text-xs font-medium">
              Location: North America, USA
            </p>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-slate-200 py-4 text-center text-gray-500 text-xs">
        <p>
          ©2024. All rights reserved by{" "}
          <span className="text-base text-gray-800">Rainbow Theme</span>.
        </p>
        <nav className="flex justify-center gap-4 mt-2">
          {legalLinks.map((link, index) => (
            <a key={index} href="#" className="text-gray-500 text-base">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Footer;
