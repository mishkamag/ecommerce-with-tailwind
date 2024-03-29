import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import Spinner from "./UI components/Spinner";

function ContactForm({ cart, setForm }) {
  const form = useRef();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          setIsSent(true);
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-75">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md w-full ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:max-w-[500px] lg:mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        >
          <div className="w-full h-full flex justify-center items-center">
            {" "}
            {isLoading && <Spinner />}
          </div>
          <div>
            {isSent && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
                <div className="flex justify-center items-center bg-white rounded-md px-4 py-2">
                  <p className="text-lg font-bold m-2 font-mono	">
                    თქვენი შეკვეთა გაგზავნილია
                    <br />
                    რამოდენიმე წუთში თქვენ დაგიკვაშირდებათ ჩვენი წარმომადგენელი{" "}
                    <br />
                    მადლობთ რომ ხართ ჩვენი მომხმარებელი
                  </p>
                  <Link to="/">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => setIsSent(false)}
                    >
                      დახურვა
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="mb-4 ">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="user_name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              name="user_tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="user_email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <textarea
              name="pdf"
              className="hidden"
              rows={cart.length + 1}
              value={cart
                .map(
                  (product) =>
                    `პროდუქტის დასახელება :${product.title} რაოდენობა: ${product.amount} ფასი: ${product.price} `
                )

                .join("\n")}
              readOnly
            />
          </div>

          <div className="flex items-center justify-center gap-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            <button
              onClick={() => {
                setForm(false);
              }}
              className="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
