import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

// Social links (Replace with your actual URLs)
const socialLinks = [
  { id: "whatsapp", icon: <FaWhatsapp />, url: "https://wa.me/919876543210", color: "bg-green-500" },
  { id: "facebook", icon: <FaFacebook />, url: "https://facebook.com/yourprofile", color: "bg-blue-600" },
  { id: "twitter", icon: <FaTwitter />, url: "https://twitter.com/yourprofile", color: "bg-blue-400" },
  { id: "youtube", icon: <FaYoutube />, url: "https://youtube.com/yourchannel", color: "bg-red-600" },
];

const SocialIcons: React.FC = () => {
  return (
    <div className="fixed bottom-10 left-10 flex space-x-4 z-50">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 flex items-center justify-center text-white rounded-full shadow-lg ${social.color}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [10, -10, 10], opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.2, // Staggered animation for natural effect
          }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
