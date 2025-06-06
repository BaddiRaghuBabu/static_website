import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import SocialIcons from "@/Data/mainData"; // Ensure this path is correct

// Define Props Type
interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

// Function to get a random entry position
const getRandomPosition = (radius: number) => {
  const theta = Math.random() * Math.PI * 2;
  return {
    x: radius * Math.cos(theta),
    y: radius * Math.sin(theta),
  };
};

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const [randomPosition, setRandomPosition] = useState(getRandomPosition(250));

  useEffect(() => {
    if (isOpen) {
      setRandomPosition(getRandomPosition(250));
    }
  }, [isOpen]);

  if (!isOpen) return null; // ✅ Don't render if not open

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose} // ✅ Close when clicking outside
    >
      {/* Popup Box */}
      <motion.div
        initial={{ x: randomPosition.x, y: randomPosition.y, opacity: 0, scale: 0.85 }}
        animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white md:w-[500px] p-6 rounded-xl shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // ✅ Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          <X size={24} />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Contact Us</h2>
        <p className="text-gray-600 text-center">Fill out the form below to get in touch with us.</p>

        {/* Contact Form */}
        <form className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
            Submit
          </Button>
        </form>

        {/* Social Icons inside the popup */}
        <div className="mt-6 flex justify-center">
          <SocialIcons />
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPopup;
