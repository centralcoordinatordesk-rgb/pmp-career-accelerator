import { useEffect, useState } from "react";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/95 border-t backdrop-blur-sm md:hidden">
      <a
        href="#hero-form"
        className="block w-full rounded-md bg-primary py-3 text-center font-heading font-bold text-primary-foreground hover:opacity-90 transition-opacity"
      >
        Book Free Consultation
      </a>
    </div>
  );
};

export default StickyMobileCTA;
