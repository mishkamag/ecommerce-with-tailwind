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
// import GoogleMap from "./GoogleMap";

const Footer = () => {
  return (
    <div className="w-full mt-2 bg-gray-100 text-black">
      <div className="container  mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-b-2 border-gray-600 py-8  ">
        <div>
          <h6 className="font-bold py-4 text-xl">ჩვენ შესახებ</h6>
          <ul>
            <li className="py-1">მიწოდება</li>
            <li className="py-1">ბლოგი</li>
            <li className="py-1">მიმდინარე შეთავაზებები</li>
            <li className="py-1">FAQ</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold py-4 text-xl">წესები & პირობები</h6>
          <ul>
            <li className="py-1">წესები & პირობები</li>
            <li className="py-1">კონფიდენციალურობა</li>
            <li className="py-1">ნივთის დაბრუნება</li>
            <li className="py-1">განვადება</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold py-4 text-xl">გამოგვყევი</h6>
          <div className="flex items-center gap-3">
            <FaFacebook />
            <p>facebook</p>
          </div>
          <div className="flex items-center gap-3">
            <FaInstagram />
            <p>instagram</p>
          </div>
          <div className="flex items-center gap-3">
            <FaTwitter />
            <p>twitter</p>
          </div>
          <div className="flex items-center gap-3">
            <FaLinkedin />
            <p>linkedin</p>
          </div>
          <div className="flex items-center gap-3">
            <FaYoutube />
            <p>youtube</p>
          </div>
        </div>
        <div>
          <h6 className="font-bold py-4 text-xl">კონტაქტი</h6>
          <div className="flex items-center gap-3">
            <FaMailBulk />
            <p>+995 595 22 56 92</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneSquareAlt />
            <p>developers@gmail.com</p>
          </div>
        </div>
        <div>
          <h6 className="font-bold py-4 text-xl">მისამართი</h6>
          {/* <div>
            <GoogleMap />
          </div> */}
          {/* IT HAS BUG */}
        </div>
      </div>

      <div className="container flex justify-center items-center  text-xl">
        <p className="py-4">2023 created by: S.Lomtadze and M.Maglaperidze</p>
      </div>
    </div>
  );
};

export default Footer;
