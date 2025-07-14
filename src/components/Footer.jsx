import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

import substack from "../assets/substack.png";
export default function Footer() {
  return (
    <div className="footer bg-gradient-to-b from-[#283848] to-white flex    overflow-hidden  h-20">
      <div className="flex justify-center items-center w-full px-20 text-white gap-6 pt-6">
        <Link
          to="https://www.instagram.com/truketlema/?hl=en"
          className="text-white target:_blank"
        >
          <FaInstagram size={44} />
        </Link>
        <Link to="https://t.me/we_riseee" className="text-white">
          <FaTelegramPlane size={44} />
        </Link>

        <Link
          to="https://substack.com/@avril516287?utm_source=user-menu"
          className="text-white"
          target="_blank"
        >
          <FaBookmark size={40} />
        </Link>

        <Link className="text-white">
          <FaLinkedin size={44} />
        </Link>
      </div>
    </div>
  );
}
