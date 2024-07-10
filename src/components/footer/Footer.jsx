import React from 'react';

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="pointer-events-auto relative flex h-[100vh] w-full flex-col items-center justify-around bg-white p-12">
      <div className="">
        <span className="text-center text-9xl font-bold uppercase">
          <span className="block">Let's Work</span>
          <span className="block">Together!</span>
        </span>
      </div>
      <div className="grid w-full grid-cols-12 text-xl">
        <div className="col-span-3 flex flex-col">
          <span>San Francisco</span>
          <span>California, USA</span>
          <span>kennethichoi@gmail.com</span>
          <span>+1 (408) 239-3088</span>
        </div>
        <div className="col-span-3 flex flex-col">
          <span>Twitter</span>
          <span>LinkedIn</span>
          <span>Github</span>
          <span>Resume</span>
        </div>
        <div className="col-span-4 col-start-8 flex flex-col">
          <span className="mb-4 text-2xl font-bold">About</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </div>
      <div className="absolute bottom-12 right-12">
        <button
          className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-black text-white"
          onClick={handleScrollToTop}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="stroke-white stroke-1"
            >
              <path
                fillRule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Footer;
