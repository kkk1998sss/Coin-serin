import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="text-black py-4 px-8 flex justify-between items-center">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-2">
        <Image
          width={500}
          height={500}
          src="/assets/logo.png"
          alt="Hyperhire Logo"
          className="w-full h-6"
        /> {/* Replace with your logo */}
      </div>

      {/* Center Section: Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <div className="relative group">
          {/* Dropdown Button */}
          <button className="flex items-center space-x-1 text-white">
            <span>채용</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div className="absolute hidden text-sm group-hover:block bg-white text-gray-700 mt-1 py-2 w-56 rounded shadow-md border border-gray-200 z-30">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              해외 개발자 원격 채용
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              외국인 원격 채용 (비개발 직군)
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              한국어 가능 외국인 채용
            </a>
          </div>
        </div>
        <a href="#" className="hover:underline text-white">
          해외 개발자 활용 서비스
        </a>
      </div>

      {/* Right Section: Button */}
      <div>
        <a
          href="#"
          className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow hover:bg-white/70"
        >
          문의하기
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
