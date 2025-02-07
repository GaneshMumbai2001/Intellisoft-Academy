import React from "react";

const GoogleMap = () => {
  return (
    <div className="flex justify-center items-center w-full h-[400px]">
      <iframe
        className="w-full h-full border-0 rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094245!2d144.95592831590457!3d-37.81720997975151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c2d1b9399cb1!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1634057734031!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
