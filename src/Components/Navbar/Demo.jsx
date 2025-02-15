import React, { useState } from "react";


function Demo() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  const languages = ["English", "French", "Spanish", "German"];
  const currencies = ["INR", "USD", "EUR", "GBP"];

  
  return (
    <div className="w-full">
      {/* Top Header */}
      <div className="flex justify-between items-center px-5 py-2 text-xs text-gray-600 max-w-[1000px] mx-auto">
        <div>Have any Question?</div>
        <div className="flex gap-4">
          <span className="cursor-pointer ">📩
          contact@intellisoft.in</span>
          <span>📞
          +91 97051 34869</span>
        </div>
        <div className="flex gap-4 items-center relative">
          <div className="relative">
            <button onClick={() => setLanguageOpen(!languageOpen)} className="flex items-center gap-1 cursor-pointer">
              <img src="/public/navbar/flag.png" alt="US Flag" className="w-4 h-3" /> {selectedLanguage}
            </button>
            {languageOpen && (
              <div className="absolute bg-white shadow-md rounded-md p-2 mt-2 w-24">
                {languages.map((lang) => (
                  <div key={lang} onClick={() => { setSelectedLanguage(lang); setLanguageOpen(false); }} className="cursor-pointer p-1 hover:bg-gray-200">
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button onClick={() => setCurrencyOpen(!currencyOpen)} className="cursor-pointer">
              {selectedCurrency}
            </button>
            {currencyOpen && (
              <div className="absolute bg-white shadow-md rounded-md p-2 mt-2 w-24">
                {currencies.map((curr) => (
                  <div key={curr} onClick={() => { setSelectedCurrency(curr); setCurrencyOpen(false); }} className="cursor-pointer p-1 hover:bg-gray-200">
                    {curr}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Demo;
