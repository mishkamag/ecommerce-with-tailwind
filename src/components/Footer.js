import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaMailBulk,
  FaPhoneSquareAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-2 bg-gray-100 text-black">
      <div className="container  mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-b-2 border-gray-600 py-8  ">
        <div>
          <h6 className="font-bold py-4 text-xl">ჩვენ შესახებ</h6>
          <ul>
            <li className="py-1 cursor-pointer">მიწოდება</li>
            <li className="py-1 cursor-pointer">ბლოგი</li>
            <li className="py-1 cursor-pointer">მიმდინარე შეთავაზებები</li>
            <li className="py-1 cursor-pointer">FAQ</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold py-4 text-xl">წესები & პირობები</h6>
          <ul>
            <li className="py-1 cursor-pointer">წესები & პირობები</li>
            <li className="py-1 cursor-pointer">კონფიდენციალურობა</li>
            <li className="py-1 cursor-pointer">ნივთის დაბრუნება</li>
            <li className="py-1 cursor-pointer">განვადება</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold py-4 text-xl">გამოგვყევი</h6>
          <a
            className="flex items-center gap-2"
            href="https://www.facebook.com/mishka.maglaperidze.5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-blue-500 hover:text-blue-700" />
            Facebook
          </a>

          <a
            className="flex items-center gap-2"
            href="https://www.instagram.com/mishkamaglaperidze/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-orange-500 hover:text-orange-700" />
            Instagram
          </a>

          <div className="flex items-center gap-3 cursor-pointer">
            <FaTwitter />
            <p>twitter</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <FaLinkedin />
            <p>linkedin</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <FaYoutube />
            <p>youtube</p>
          </div>
        </div>
        <div>
          <h6 className="font-bold py-4 text-xl">კონტაქტი</h6>
          <div className="flex items-center gap-3 cursor-pointer">
            <FaMailBulk />
            <p>developers@gmail.com </p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneSquareAlt />
            <p>+995 595 22 56 92</p>
          </div>
        </div>
        <div>
          <h6 className="font-bold py-4 text-xl">მისამართი</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
