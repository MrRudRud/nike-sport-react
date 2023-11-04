import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
const Navbar = () => {
  return (
    <>
      <header className="bg-theme">
        <nav className="flex items-center justify-between nike-container">
          {/* logo */}
          <div className="flex items-center">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 3.53125 24.222656 C 4.5 26.84375 6.957031 28.382813 10.417969 28.382813 C 11.300781 28.382813 12.203125 28.253906 13.089844 28.003906 C 13.234375 27.96875 18.75 26.472656 25.484375 24.644531 C 18.839844 27.519531 13.074219 29.996094 11.90625 30.460938 L 11.84375 30.488281 C 10.164063 31.160156 8.070313 31.996094 6.132813 31.996094 C 2.742188 31.996094 2 29.761719 2 28.902344 C 2 27.902344 2.335938 26.398438 3.53125 24.222656 M 49.839844 16.003906 C 49.785156 16.003906 49.722656 16.011719 49.644531 16.03125 C 49.480469 16.070313 12.566406 26.074219 12.566406 26.074219 C 11.855469 26.273438 11.128906 26.382813 10.417969 26.382813 C 7.226563 26.382813 5.078125 24.851563 5.078125 21.507813 C 5.078125 20.207031 5.484375 18.640625 6.40625 16.800781 C 3.152344 20.621094 0 25.234375 0 28.902344 C 0 31.019531 1.78125 33.996094 6.128906 33.996094 C 8.484375 33.996094 10.820313 33.050781 12.648438 32.320313 C 15.730469 31.085938 49.789063 16.296875 49.789063 16.296875 C 50.058594 16.164063 50.066406 16.003906 49.839844 16.003906 Z"></path>
            </svg>
          </div>
          {/* Icons */}
          <ul className="flex items-center justify-center gap-3">
            <li>
              <MagnifyingGlassIcon className="icon-style" />
            </li>
            <li>
              <HeartIcon className="icon-style" />
            </li>
            <li>
              <button
                type="button"
                className="relative border-none outline-none active:scale-110 duration-300 "
              >
                <ShoppingBagIcon className="icon-style" />
                <div
                  className={`absolute top-4 right-0 bg-white text-slate-900 shadow-slate-100 w-4 h-4 text-[0.75rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300`}
                >
                  0
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;