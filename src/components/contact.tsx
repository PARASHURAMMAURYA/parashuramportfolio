import { TextField, TextareaAutosize } from "@mui/material";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  const emailAddress = "mparashuram726@gmail.com";
  const sendEmail = () => {
  window.open("https://mail.google.com/mail/u/0/#inbox?compose=lqrslrmLXbXlNkCnMdfpDgnlSXdfKkDkQgHGjTNgnVHKCVgBpSDcHNXdJZMmpsxhXcWfwGfgclBGMwllf");
};

  return (
    <>
      <section className="relative  z-10  text-white overflow-hidden  py-20 dark:bg-dark lg:py-[120px]">
        <div className="container  text-white">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="mb-4 block text-base font-semibold text-primary">
                  Contact Us
                </span>
                <h2 className="mb-6 text-[32px] font-bold uppercase text-white dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH
                </h2>
                <p className="mb-9 text-base leading-relaxed text-body-white dark:text-dark-6">
                  We would love to hear from you! Please fill out the form
                  below, and we'll get back to you as soon as possible.
                </p>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <a
                    href="https://www.linkedin.com/in/parashuram-maurya-532908221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
                    className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]"
                  >
                    <FaLinkedinIn size={25} />
                  </a>
                  <div className="w-full">
                    <h4 className=" flex pt-3 mb-1 text-xl font-bold text-white dark:text-white">
                      Linkedin
                    </h4>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <a
                    href="https://github.com/PARASHURAMMAURYA
"
                    className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]"
                  >
                    <BsGithub size={25} />
                  </a>
                  <div className="w-full">
                    <h4 className=" flex pt-3 mb-1 text-xl font-bold text-white dark:text-white">
                      GitHub{" "}
                    </h4>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <a
                    href={`mailto:${emailAddress} `}
                    onClick={sendEmail}
                    className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-white dark:text-white">
                      Email Address
                    </h4>
                    <p className="text-base text-white">
                      mparashuram726@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                <form>
                  <TextField
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    fullWidth
                    className="pb-3"
                  />
                  <TextField
                    type="text"
                    name="email"
                    fullWidth
                    placeholder="Your Email"
                    className="pb-3"
                  />
                  <TextField
                    type="text"
                    name="phone"
                    fullWidth
                    placeholder="Your Phone"
                    className="pb-3"
                  />
                  <TextareaAutosize
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                    className="pb-3"
                    style={{ width: "100%", height: "140px", border: "1px" }}
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -right-9 -top-10 z-[-1]">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
