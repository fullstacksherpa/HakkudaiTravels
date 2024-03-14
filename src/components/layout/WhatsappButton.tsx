import Link from "next/link";
import Image from "next/image";

const WhatsappButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-[100000]">
      <Link aria-label="Chat on WhatsApp" href="https://wa.me/9779851359964?text=Hey%20adventurer%2C%20excited%20for%20your%20Nepal%20trip%3F%20Let%27s%20customize%20your%20itinerary%20to%20match%20your%20preferences%20perfectly." target="_blank">
        <Image alt="Chat on WhatsApp" src="/assets/images/oldone/ChatOnWhatsAppButton/WhatsAppButtonGreenSmall.png" width="130" height="36" className="backdrop-blur-md"/>
      </Link>
    </div>
  );
};

export default WhatsappButton;
