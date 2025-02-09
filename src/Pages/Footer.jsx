// import React from "react";

// const Footer = () => {
//   const usefulLinks = [
//     "Marketplace",
//     "Gym Coachings",
//     "Kindergarden",
//     "University",
//     "About Us",
//   ];
//   const companyLinks = [
//     "Contact Us",
//     "Technology",
//     "Instructor",
//     "Pricing",
//     "Service",
//   ];
//   const legalLinks = [
//     "Terms of service",
//     "Privacy Policy",
//     "Subscription",
//     "Login & Register",
//   ];

//   const FooterLinkSection = ({ title, links }) => (
//     <div className="flex flex-col justify-center pt-6 max-w-[217px]">
//       <div className="text-sm font-bold text-gray-800">{title}</div>
//       <div className="mt-4 text-base text-gray-500">
//         {links.map((link, index) => (
//           <div key={index} className="mt-2 first:mt-0 whitespace-nowrap">
//             {link}
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex flex-col bg-white items-center">
//       <div className="flex flex-wrap justify-center w-full gap-24 py-10">
//         <div className="flex flex-col items-start max-w-[301px] text-center">
//           <img
//             src="public/navbar/intellisoft.png"
//             alt="Company Logo"
//             className="w-[114px] object-contain"
//           />
//           <p className="mt-4 text-xs text-gray-500">
//             We're always in search for talented and motivated people. Don't be
//             shy introduce yourself!
//           </p>
//           <button className="mt-4 px-5 py-2 border-2 rounded-full shadow-md text-gray-800 bg-white">
//             Contact With Us
//           </button>
//         </div>
//         <FooterLinkSection title="Useful Links" links={usefulLinks} />
//         <FooterLinkSection title="Our Company" links={companyLinks} />
//         <div className="flex flex-col  pt-6 max-w-[217px] text-gray-500">
//           <div className="text-base font-bold text-gray-800">Get Contact</div>
//           <div className="mt-4 text-base">
//             <p className="text-xs font-medium">
//               Phone: <a href="tel:(406) 555-0120">(406) 555-0120</a>
//             </p>
//             <p className="text-xs font-medium mt-2">
//               E-mail:{" "}
//               <a href="mailto:rainbow@example.com">rainbow@example.com</a>
//             </p>
//             <p className="mt-2 text-xs font-medium">
//               Location: North America, USA
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="w-full border-t border-slate-200 py-4 text-center text-gray-500 text-xs">
//         <p>
//           ©2024. All rights reserved by{" "}
//           <span className="text-base text-gray-800">Rainbow Theme</span>.
//         </p>
//         <nav className="flex justify-center gap-4 mt-2">
//           {legalLinks.map((link, index) => (
//             <a key={index} href="#" className="text-gray-500 text-base">
//               {link}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const usefulLinks = [
    "About Us",
    "Marketplace",
    "Gym Coachings",
    "Kindergarden",
    "University",
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col bg-white items-center"
    >
      <div className="flex flex-wrap justify-center w-full gap-24 py-10">
        {/* Company Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-start max-w-[301px] text-center"
        >
          <img
            src="public/navbar/intellisoft.png"
            alt="Company Logo"
            className="w-[114px] object-contain"
          />
          <p className="mt-4 text-xs text-gray-500">
            We're always in search for talented and motivated people. Don't be
            shy introduce yourself!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-5 py-2 border-2 border-gray-800 rounded-full shadow-md text-gray-800 bg-white hover:bg-gray-100 transition"
          >
            Contact With Us
          </motion.button>
        </motion.div>

        {/* Useful Links Section Styled Like Get Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col pt-6 max-w-[217px] text-gray-500"
        >
          <div className="text-lg font-bold text-gray-800">Useful Links</div>
          <div className="mt-4 text-base space-y-3">
            {usefulLinks.map((link, index) => (
              <p key={index} className="text-sm font-semibold flex items-center gap-1">
                🔗 <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                  {link}
                </a>
              </p>
            ))}
          </div>
        </motion.div>

        {/* Our Company Section Styled Like Get Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col pt-6 max-w-[217px] text-gray-500"
        >
          <div className="text-lg font-bold text-gray-800">Our Company</div>
          <div className="mt-4 text-base space-y-3">
            {companyLinks.map((link, index) => (
              <p key={index} className="text-sm font-semibold flex items-center gap-1">
                🏢 <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                  {link}
                </a>
              </p>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col pt-6 max-w-[217px] text-gray-500"
        >
          <div className="text-lg font-bold text-gray-800">Get Contact</div>
          <div className="mt-4 text-base space-y-3">
            <p className="text-sm font-semibold flex items-center gap-1">
              📞 <a href="tel:+919705134869" className="text-gray-700 hover:text-blue-600 transition">
                +91 97051 34869
              </a>
            </p>
            <p className="text-sm font-semibold flex items-center gap-1">
            📩 <a href="mailto:contact@intellisoft.in" className="text-gray-700 hover:text-blue-600 transition">
                contact@intellisoft.in
              </a>
            </p>
            <p className="mt-2 text-sm font-semibold flex flex-col text-gray-700">
              📍 <span>1. Papaiah Yadav Nagar, Ganesh Nagar, Hyderabad- 500034, Telangana</span>
              <br />
              📍 <span>2. Bestavaripeta, Andhra Pradesh - 523334</span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;