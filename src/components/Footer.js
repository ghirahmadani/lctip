import React from "react";
import Logo from "../resources/logolctip.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto w-9/12 max-w-screen-xl p-4 pt-20">
        <div className="grid grid-cols md:grid md:grid-cols-3 pb-10 gap-10 lg:gap-0">
          <div className="order-1">
            {/* Logo */}
            <Link to="/" className="flex justify-center items-start hover:scale-105 transition duration-300 delay-150" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
              <img
                src={Logo}
                className="w-48 mb-4"
                alt="Logo LCTIP"
              />
            </Link>
            {/* Line */}
            <div className="flex mt-4 space-x-6 justify-center">
              <a
                href="http://line.me/ti/p/~kathleen_t"
                className="text-gray-500 hover:text-gray-900 "
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0zM5.022 7.686H3.497V4.918a.156.156 0 00-.155-.156H2.78a.156.156 0 00-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 00.108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 00-.155-.157zm.791-2.924a.156.156 0 00-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 00-.155-.156h-.562zm3.863 0a.156.156 0 00-.156.156v2.07L7.923 4.832a.17.17 0 00-.013-.015v-.001a.139.139 0 00-.01-.01l-.003-.003a.092.092 0 00-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 00-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 00-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 00-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 00.039.038l.001.001.01.006.004.002a.066.066 0 00.008.004l.007.003.005.002a.168.168 0 00.01.003h.003a.155.155 0 00.04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 00-.156-.156h-.561zm3.815.717v-.56a.156.156 0 00-.155-.157h-2.242a.155.155 0 00-.108.044h-.001l-.001.002-.002.003a.155.155 0 00-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 00.108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 00-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 00-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156z" />
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="https://twitter.com/LctipIpb"
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/lctipipb/"
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.tiktok.com/@lctipipb"
                className="text-gray-500 hover:text-gray-900 "
              >
                <svg className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
              </a>
            </div>
          </div>

          <div className="order-2 my-10 md:my-0 lg:my-0 md:pl-5 lg:pl-20">
            <div>
              <h1 className="mb-4 text-left tracking-wider text-lg fredoka font-semibold text-gray-900 uppercase">
                Contact Us
              </h1>

              <p className="text-sm text-left mb-2 text-stone-800">Kathleen</p>
              <div className="flex items-center mb-2">
                <svg className="w-3 h-3 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 00-.371.1 1.293 1.293 0 00-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 006.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 003.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 00.833-.231 4.83 4.83 0 00.383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 00-.177-.041.482.482 0 00-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 01-.368.13 1.416 1.416 0 01-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 01-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 01-1.02-1.268l-.059-.095a.923.923 0 01-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 00.263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 00-.403.004z" />
                </svg>
                <p className="text-sm text-left ml-2 text-stone-800">083807840380</p>
              </div>
              <div className="flex items-center mb-2">
                <svg
                  className="w-3 h-3 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0zM5.022 7.686H3.497V4.918a.156.156 0 00-.155-.156H2.78a.156.156 0 00-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 00.108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 00-.155-.157zm.791-2.924a.156.156 0 00-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 00-.155-.156h-.562zm3.863 0a.156.156 0 00-.156.156v2.07L7.923 4.832a.17.17 0 00-.013-.015v-.001a.139.139 0 00-.01-.01l-.003-.003a.092.092 0 00-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 00-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 00-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 00-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 00.039.038l.001.001.01.006.004.002a.066.066 0 00.008.004l.007.003.005.002a.168.168 0 00.01.003h.003a.155.155 0 00.04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 00-.156-.156h-.561zm3.815.717v-.56a.156.156 0 00-.155-.157h-2.242a.155.155 0 00-.108.044h-.001l-.001.002-.002.003a.155.155 0 00-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 00.108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 00-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 00-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156z" />
                </svg>
                <p className="text-sm text-left leading-7 ml-2 text-stone-800">kathleen_t</p>
              </div>

              <p className="text-sm text-left mt-4 mb-2 text-stone-800">Maylia</p>
              <div className="flex items-center mb-2">
                <svg className="w-3 h-3 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 00-.371.1 1.293 1.293 0 00-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 006.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 003.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 00.833-.231 4.83 4.83 0 00.383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 00-.177-.041.482.482 0 00-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 01-.368.13 1.416 1.416 0 01-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 01-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 01-1.02-1.268l-.059-.095a.923.923 0 01-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 00.263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 00-.403.004z" />
                </svg>
                <p className="text-sm text-left ml-2 text-stone-800">081541268240</p>
              </div>
              <div className="flex items-center mb-2">
                <svg
                  className="w-3 h-3 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0zM5.022 7.686H3.497V4.918a.156.156 0 00-.155-.156H2.78a.156.156 0 00-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 00.108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 00-.155-.157zm.791-2.924a.156.156 0 00-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 00-.155-.156h-.562zm3.863 0a.156.156 0 00-.156.156v2.07L7.923 4.832a.17.17 0 00-.013-.015v-.001a.139.139 0 00-.01-.01l-.003-.003a.092.092 0 00-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 00-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 00-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 00-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 00.039.038l.001.001.01.006.004.002a.066.066 0 00.008.004l.007.003.005.002a.168.168 0 00.01.003h.003a.155.155 0 00.04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 00-.156-.156h-.561zm3.815.717v-.56a.156.156 0 00-.155-.157h-2.242a.155.155 0 00-.108.044h-.001l-.001.002-.002.003a.155.155 0 00-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 00.108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 00-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 00-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156z" />
                </svg>
                <p className="text-sm text-left leading-7 ml-2 text-stone-800">smayliaelr</p>
              </div>
              
            </div>
          </div>

          <div className="order-3">
            <h1 className="mb-4 fredoka tracking-wider text-left text-lg font-semibold text-gray-900 uppercase dark:text-white">
              Sekertariat HIMITEPA
            </h1>
            <p className="text-sm text-left leading-7 text-stone-800">
              Lantai Dasar <br></br>Gedung Fakultas Teknologi Pertanian<br></br>Kampus Dramaga IPB, Bogor
            </p>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto " />
        <div className="flex justify-between mb-4">
          <span className="text-[0.6rem] md:text-base text-left leading-7 text-stone-600">
            © <span className="font-semibold">LCTIP XXXI</span>, All Rights Reserved.
          </span>
          <span className="text-[0.6rem] md:text-base text-right leading-7 text-stone-600">
            Designed by <span className="font-semibold">GI TECH</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
