import React from "react";
import { Form } from "./Form";

function FormSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-24 px-5">
      <div className="flex flex-wrap justify-center w-full max-w-[1440px]">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full max-w-[990px]">
          <img
            loading="lazy"
            src="public/contact/hero.png"
            alt="Contact form illustration"
            className="object-contain w-full max-w-[478px] mb-6"
          />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default FormSection;
