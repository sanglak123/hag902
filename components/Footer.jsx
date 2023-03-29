import Link from "next/link";
import React from "react";

function Footer(props) {
  return (
    <footer className="relative bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24">
      <div className="flex flex-col md:flex-row">
        <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
          <h3 className="font-bold text-2xl">DentalPro</h3>
          <p className="text-gray-400">
            {" "}
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
          </p>

          <form className="flex items-center mt-6">
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Subscribe for our Newsletter
              </label>
              <div className="relative">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="email"
                  placeholder="Enter Your Email Address"
                />

                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 text-sm font-bold rounded absolute top-0 right-0 my-2 mr-2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
          <h5 className="uppercase tracking-wider font-semibold text-gray-500">
            Treatments
          </h5>
          <ul className="mt-4">
            <li className="mt-2">
              <Link href="#" title="" className="opacity-75 hover:opacity-100">
                General Dentistry
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#" title="" className="opacity-75 hover:opacity-100">
                Cosmetic Dentistry
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#" title="" className="opacity-75 hover:opacity-100">
                Oral Health
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
          <h5 className="uppercase tracking-wider font-semibold text-gray-500">
            Contact Details
          </h5>
          <ul className="mt-4">
            <li>
              <Link
                href="#"
                className="flex items-center opacity-75 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                </svg>
                <span className="ml-3">1985 Kerry Way, Whittier, CA, USA</span>
              </Link>
            </li>
            <li className="mt-4">
              <Link
                href="#"
                className="flex items-center opacity-75 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                </svg>
                <span className="ml-3">1985 Kerry Way, Whittier, CA, USA</span>
              </Link>
            </li>
            <li className="mt-4">
              <Link
                href="#"
                className="flex items-center opacity-75 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                </svg>
                <span className="ml-3">1985 Kerry Way, Whittier, CA, USA</span>
              </Link>
            </li>
            <li className="mt-4">
              <Link
                href="#"
                className="flex items-center opacity-75 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                </svg>
                <span className="ml-3">1985 Kerry Way, Whittier, CA, USA</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
          <h5 className="uppercase tracking-wider font-semibold text-gray-500">
            We're Social
          </h5>
          <ul className="mt-4 flex">
            <li>
              <Link
                href="#"
                className="flex items-center opacity-75 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                </svg>
                <span className="ml-3">1985 Kerry Way, Whittier, CA, USA</span>
              </Link>
            </li>

            <li className="ml-6">
              <Link
                href="#"
                className="flex items-center opacity-75 hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                </svg>
                <span className="ml-3">1985 Kerry Way, Whittier, CA, USA</span>
              </Link>
            </li>
          </ul>

          <p className="text-sm text-gray-400 mt-12">
            2018 ProDentists. <br className="hidden lg:block" />
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
