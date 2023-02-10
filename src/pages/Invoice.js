import React, { useContext, useRef, useState } from "react";
import { CartContext } from "../store/CartContext";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import emailjs from "emailjs-com";

const Invoice = () => {
  const { cart, totalPrice } = useContext(CartContext);
  const [email, setEmail] = useState("");

  const [pdf, setPdf] = useState(null);
  const componentRef = useRef();

  const handleGenerate = () => {
    const doc = new jsPDF();
    doc.text("Products", 10, 10);
    doc.autoTable({
      head: [["Title", "Amount", "Price,"]],
      body: cart.map((product) => [
        product.title,
        product.amount,
        product.price,
      ]),
    });
    setPdf(doc.output("datauristring"));
  };

  const base64 = btoa(pdf);
  // console.log(base64);

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleGenerate();
    console.log(pdf);

    const result = await emailjs.send(
      "service_vw8fu2d",
      "template_tfe9hys",

      base64,
      //   attachments: [
      //     {
      //       type: "application/pdf",
      //       name: "products.pdf",
      //       content: pdf,
      //     },
      //   ],
      // },
      "gBc71-RpPzO0bJXH4"
    );
  };

  return (
    <div className="">
      <header className="  bg-gray-100 px-4 py-6 border-b border-gray-200 sm:px-6 flex justify-between">
        <div>
          <div className="mb-4 w-[90px]">
            <img
              src="https://www.pngitem.com/pimgs/m/161-1619330_logos-e-commerce-png-transparent-png.png"
              alt=""
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="font-bold mb-2">From:</div>
          <div className="text-gray-600">
            Ecommerce <br />
            Buxaidze str 19/77 <br />
            Kutaisi 4600
          </div>
        </div>
      </header>

      <form
        ref={componentRef}
        className="bg-white  rounded-lg shadow-md max-h-[300px] lg:max-h-[330px] overflow-y-auto overflow-x-hidden  "
      >
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm font-medium text-white uppercase border bg-[#008ECC]  ">
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index} className="text-sm text-gray-700">
                <td className="py-3 px-4 border font-semibold">{item.title}</td>
                <td className="py-3 px-4 border">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </td>
                <td className="py-3 px-4 border font-semibold">
                  {item.amount}
                </td>
                <td className="py-3 px-4 border font-bold">{`$ ${(
                  item.price * item.amount
                ).toFixed(2)}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
      <div className="flex w-full ">
        <div className="  bg-[#008ECC] text-white font-bold py-2 px-12 rounded   mt-4">
          TOTAL: {totalPrice.toFixed(2)}
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
          <div className="flex items-center border-b border-[#008ECC] py-2">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-[#008ECC] hover:bg-blue-700 border-[#008ECC] hover:border-[#008ECC] text-sm border-4 text-white py-1 px-2 rounded"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Invoice;

// {pdf && <iframe title="generated pdf" src={pdf} />}

//   console.log(componentRef);

// const data = {
//   to: email,
//   from: "m93.maglaperidze@gmail.com",
//   subject: "Invoice",
//   text: "Invoice",
//   attachments: [
//     {
//       content: base64,
//       filename: "invoice.pdf",
//       type: "application/pdf",
//       disposition: "attachment",
//     },
//   ],
// };

// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization:
//       "Bearer key of sendgrid",
//   },
//   body: JSON.stringify(data),
// };

// console.log(options);

// fetch("https://api.sendgrid.com/v3/mail/send", options)
// .then((response) => {
//   console.log(response);
// })
// .catch((error) => {
//   console.error(error);
// });

// const functions = require('firebase-functions');
// const nodemailer = require('nodemailer');
// const gmailEmail = encodeURIComponent(functions.config().gmail.email);
// const gmailPassword = encodeURIComponent(functions.config().gmail.password);
// const mailTransport = nodemailer.createTransport(
//     smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com);

// exports.sendEmail = functions.https.onCall((data, context) => {
//   const mailOptions = {
//     to: data.to,
//     subject: data.subject,
//     html: data.body
//   };
//   return mailTransport.sendMail(mailOptions).then(() => {
//     return { success: true };
//   });
// });
