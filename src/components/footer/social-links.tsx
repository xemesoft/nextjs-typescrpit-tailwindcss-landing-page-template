import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsTiktok,
  BsPinterest,
  BsLinkedin,
} from "react-icons/bs";
import React from "react";

export default function SocialLinks() {
  const socialLinks = [
    {
      id: 1,
      icon: <BsFacebook />,
      url: "https://facebook.com/",
    },
    {
      id: 2,
      icon: <BsTwitterX />,
      url: "https://x.com/",
    },
    {
      id: 3,
      icon: <BsInstagram />,
      url: "https://instagram.com/",
    },
    {
      id: 4,
      icon: <BsTiktok />,
      url: "https://www.tiktok.com/",
    },
    {
      id: 5,
      icon: <BsPinterest />,
      url: "https://www.pinterest.com/",
    },
    {
      id: 5,
      icon: <BsLinkedin />,
      url: "https://www.linkedin.com/",
    },
  ];

  return (
    <ul className="flex flex-row">
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.url}
            className="text-base mr-8 text-gray-400 hover:text-gray-900 inline-flex items-center justify-center tracking-wide"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}