import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-3 right-4 p-3 bg-blue-950 shadow-lg rounded-full transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <ArrowUp className="w-6 h-6 text-blue-50" />
    </button>
  );
};

export default BackToTop;
