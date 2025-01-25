import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { FaCode, FaUsers, FaUniversity, FaHandshake } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1e293b] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/home">
          <button className="flex items-center gap-2 rounded-full border border-white p-2 hover:bg-[#334155]">
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden md:inline">Back</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

// const SectionButton = ({ label }) => (
//   <button className="w-full rounded-md border border-gray-700 bg-[#475569] px-4 py-2 text-sm font-medium text-white hover:bg-[#64748b] md:w-auto">
//     {label}
//   </button>
// );

const Footer = () => {
  return (
    <footer className="mt-8 w-full bg-[#1e293b] py-6 text-white">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-[#00a6fb]">DevDisplay</h4>
            <p className="mt-1 text-sm">
              DevDisplay is a global open-source tech community and organization with a mission to unite all your tech
              needs under one platform.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="/about" className="text-sm hover:text-[#00a6fb]">
              About Us
            </a>
            <a href="/contact" className="text-sm hover:text-[#00a6fb]">
              Contact
            </a>
            <a href="/privacy" className="text-sm hover:text-[#00a6fb]">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm hover:text-[#00a6fb]">
              Terms of Service
            </a>
          </div>

          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-lg hover:text-[#00a6fb]"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-lg hover:text-[#00a6fb]"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in text-lg hover:text-[#00a6fb]"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-lg hover:text-[#00a6fb]"></i>
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© 2024 DevDisplay. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const DevSpring = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="bg-[#334155] py-3 text-center text-white">
        <div className="mx-auto mt-3 flex w-full max-w-xs items-center justify-center gap-2">
          <img src="./PoweredByDevDisplay.png" alt="DevDisplay Logo" className="custom-logo" />
        </div>
      </div>
      <main className="mx-auto max-w-6xl px-4 py-10 text-center">
        <div className="flex flex-col items-center">
          <h1 className="flex text-5xl font-bold text-[#31A9BF]">
            <span className="text-white">{'{'}</span>
            <span className="animate-glitch text-[#BF3356]">D</span>
            <span className="animate-glitch text-[#BF3356]">e</span>
            <span className="animate-glitch text-[#BF3356]">v</span>
            <span className="animate-glitch">S</span>
            <span className="animate-glitch">p</span>
            <span className="animate-glitch">r</span>
            <span className="animate-glitch">i</span>
            <span className="animate-glitch">n</span>
            <span className="animate-glitch">g</span>
            <span className="text-white">{'}'}</span>
          </h1>

          <style jsx>{`
            @keyframes glitch {
              0% {
                transform: translate(0, 0);
                opacity: 1;
              }
              20% {
                transform: translate(-2px, 2px);
              }
              40% {
                transform: translate(2px, -2px);
              }
              60% {
                transform: translate(-2px, -2px);
              }
              80% {
                transform: translate(2px, 2px);
              }
              100% {
                transform: translate(0, 0);
                opacity: 1;
              }
            }

            @keyframes glitch-color {
              0%,
              100% {
                filter: hue-rotate(0deg);
              }
              50% {
                filter: hue-rotate(360deg);
              }
            }

            .animate-glitch {
              display: inline-block;
              position: relative;
              animation:
                glitch 0.7s infinite alternate ease-in-out,
                glitch-color 2s infinite alternate ease-in-out;
            }

            .animate-glitch:before,
            .animate-glitch:after {
              content: attr(data-char);
              position: absolute;
              top: 0;
              left: 0;
              opacity: 0.8;
              z-index: -1;
            }

            .animate-glitch:before {
              animation: glitch 0.7s infinite alternate-reverse ease-in-out;
              color: #ff006e;
              clip-path: inset(0 1px 0 0);
            }

            .animate-glitch:after {
              animation: glitch 0.7s infinite alternate ease-in-out;
              color: #00f5d4;
              clip-path: inset(1px 0 0 1px);
            }
          `}</style>

          <img src="./DevSpring.png" alt="DevSpring Logo" className="mt-2 h-[125px] w-[125px]" />
        </div>
        <h1 className="text-4xl font-bold text-[#00a6fb]">2 Month Open Source Impact</h1>
        <p className="mt-2 text-lg text-gray-300">
          Join the DevSpring & Be a part of 2 month Open Source Impact With DevDisplay.
        </p>
        <p className="mt-2 text-lg text-gray-300">⚡DevSpring isn't just an event—it's a movement.</p>
        <p className="mt-2 text-lg text-gray-300">
          A global platform where your ideas can take flight, where collaboration can create breakthroughs, and where
          YOU can prove you're unstoppable.
        </p>
        <p className="mt-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 p-4 text-lg text-white shadow-lg">
          <span role="img" aria-label="hurry up" className="mr-2 text-2xl">
            ⏰
          </span>
          <span className="font-semibold">
            10<sup>th</sup> January to 10<sup>th</sup> March
          </span>
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-[#1e3a8a] p-6 text-white shadow-lg">
            <FaCode className="mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-bold">Calling All Developers</h3>
            <p className="text-sm">Open source contributors</p>
            <a
              href="https://forms.gle/yNDEHgUQgdNJqo5w5"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full rounded-md bg-[#00a6fb] py-2 text-white"
            >
              Click here to join
            </a>
          </div>
          <div className="rounded-lg bg-[#0f766e] p-6 text-white shadow-lg">
            <FaUsers className="mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-bold">Calling All Tech Communities</h3>
            <p className="text-sm">Community partners</p>
            <a
              href="https://swift-sheet-b33.notion.site/DevDisplay-Community-Partnership-Guidelines-1717d1f1565b8033a86fe37facd28e1d"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full rounded-md bg-[#00a6fb] py-2 text-white"
            >
              Click here to join
            </a>
          </div>
          <div className="rounded-lg bg-[#7c3aed] p-6 text-white shadow-lg">
            <FaUniversity className="mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-bold">Calling All College Students</h3>
            <p className="text-sm">Community Leader</p>
            <a
              href="https://forms.gle/sSrhxLxdNbLH3h1q6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full rounded-md bg-[#00a6fb] py-2 text-white"
            >
              Click here to join
            </a>
          </div>
          <div className="rounded-lg bg-[#dc2626] p-6 text-white shadow-lg">
            <FaHandshake className="mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-bold">Calling All Sponsors</h3>
            <p className="text-sm">Support the initiative</p>
            <a
              href="https://swift-sheet-b33.notion.site/DevDisplay-Sponsership-Guidelines-1727d1f1565b802da284d39fdf7fd72b"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full rounded-md bg-[#00a6fb] py-2 text-white"
            >
              Click here to join
            </a>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 p-4 text-lg text-white shadow-lg">
          <div className="rounded-lg bg-[#1e3a8a] p-6 text-white shadow-lg">
            <h3 className="text-xl font-bold">Guidelines</h3>
            <div className="mt-4 flex flex-col gap-4">
              <a
                href="https://swift-sheet-b33.notion.site/Contribution-Guidelines-17c7d1f1565b800a99bbfa19f80e1896?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-md bg-[#00a6fb] py-2 text-center text-white"
              >
                Contribution Guidelines
              </a>
              <a
                href="https://swift-sheet-b33.notion.site/DevSpring-Community-Leader-Guide-17c7d1f1565b800dd9e7fc96473437fec?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-md bg-[#00a6fb] py-2 text-center text-white"
              >
                Community Leader Guide
              </a>
              <a
                href="https://swift-sheet-b33.notion.site/DevSpring-Community-Partners-Guide-1787d1f1565b8002adb4d2f1f499217b?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-md bg-[#00a6fb] py-2 text-center text-white"
              >
                Community Partner Guide
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Man%20Technologist.webp"
            alt="Man Technologist"
            width="100"
            height="100"
          />
        </div>
        <p className="from-black-300 to-black-500 mt-4 flex items-center justify-center rounded-lg bg-gradient-to-r via-red-500 p-4 text-lg text-white shadow-lg">
          <span role="img" aria-label="hurry up" className="mr-2 text-2xl">
            <p className="mt-2 text-lg text-gray-300"> Let's Connect ▸ Collab ▸ Code ▸ Create ▸ Conquer</p>
            <p className="mt-2 text-lg text-gray-300">
              {' '}
              This is our time. This is your future. Let's make it unforgettable. Let's make history together. 🌟
            </p>
            <p className="mt-2 text-lg text-gray-300">
              ✨ Your ideas matter. Your code matters. You matter. So, wake up, show up, and own this moment.
            </p>
          </span>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default DevSpring;
