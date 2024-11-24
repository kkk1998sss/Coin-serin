import Image from "next/image";

interface FooterProps {
  company: string;
  ceo: string;
  address: string;
}

const Footer: React.FC<FooterProps> = ({ company, ceo, address }) => (
  <footer className="bg-white text-gray-800 py-12">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          {/* Add uploaded image as logo */}
          <Image
            src="/assets/footerlogo.png"
            alt="Hyperhire Logo"
            width={500}
            height={500}
            className="w-52 h-auto"
          />
        </div>
        <p>우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
        <p className="font-medium">010-0000-0000</p>
        <p className="font-medium">aaaaa@naver.com</p>
        <div className="flex gap-8">
          <div>
            <p className="font-medium">상호명</p>
            <p className="text-gray-600">하이퍼하이어</p>
            <p className="font-medium">{company}</p>
          </div>
          <div>
            <p className="font-medium">대표 CEO</p>
            <p className="text-gray-600">{ceo}</p>
            <p className="font-medium">Juhyun Kim</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Service Sections */}
        <div className="flex flex-col items-start space-y-2">
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md">
            <span className="text-xl">
              <Image
                width={500}
                height={500}
                src="/assets/code.png" // Use the mapped icon path
                alt="code"
                className="w-[2rem] h-[2rem]"
              />
            </span>
          </div>
          <p className="font-semibold">해외 개발자 원격 채용</p>
          <a href="#" className="text-blue-500 hover:underline">
             
            <span className="text-sm flex justify-center font-semibold text-[#5E626F]">
              바로가기
              <Image
                width={500}
                height={500}
                src="/assets/arrow.png" // Use the mapped icon path
                alt="Vector"
                className="w-5 h-5"
              />
            </span>
          </a>
        </div>

        <div className="flex flex-col items-start space-y-2">
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md">
            <span className="text-xl">
              <Image
                width={500}
                height={500}
                src="/assets/user.png" // Use the mapped icon path
                alt="user"
                className="w-[2rem] h-[2rem]"
              />
            </span>
          </div>
          <p className="font-semibold">한국어 가능 외국인 채용</p>
          <a href="#" className="text-blue-500 hover:underline">
          <span className="text-sm flex justify-center font-semibold text-[#5E626F]">
              바로가기
              <Image
                width={500}
                height={500}
                src="/assets/arrow.png" // Use the mapped icon path
                alt="Vector"
                className="w-5 h-5"
              />
            </span>
          </a>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md">
            <span className="">
              <Image
                width={500}
                height={500}
                src="/assets/KOR.png" // Use the mapped icon path
                alt="KOR"
                className="w-[2rem]"
              />
            </span>
          </div>
          <p className="font-semibold">외국인 원격 채용 (비개발)</p>
          <a href="#" className="text-blue-500 hover:underline">
          <span className="text-sm flex justify-center font-semibold text-[#5E626F]">
              바로가기
              <Image
                width={500}
                height={500}
                src="/assets/arrow.png" // Use the mapped icon path
                alt="Vector"
                className="w-5 h-5"
              />
            </span>
          </a>
        </div>

        <div className="flex flex-col items-start space-y-2">
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md">
            <span className="text-xl">
              <Image
                width={500}
                height={500}
                src="/assets/Vector.png" // Use the mapped icon path
                alt="Vector"
                className="w-[1.8rem] "
              />
            </span>
          </div>
          <p className="font-semibold">해외 개발자 활용 서비스</p>
          <a href="#" className="text-blue-500 hover:underline">
          <span className="text-sm flex justify-center font-semibold text-[#5E626F]">
              바로가기
              <Image
                width={500}
                height={500}
                src="/assets/arrow.png" // Use the mapped icon path
                alt="Vector"
                className="w-5 h-5"
              />
            </span>
          </a>
        </div>

        {/* Address Section */}
        <div className="col-span-2">
          <p className="font-medium">사업자등록번호 CIN</p>
          <p className="text-gray-600">427-86-01187</p>
          <p className="font-medium">U74110DL2016PTC290812</p>
        </div>
        <div className="col-span-2">
          <p className="font-medium">주소 ADDRESS</p>
          <div className="text-gray-600">{address}</div>
        </div>
      </div>
    </div>

    {/* Footer Bottom Section */}
    <div className="max-w-7xl mx-auto mt-8 pl-6">
      <p className="text-gray-400 text-sm">© 2023 Hyperhire</p>
    </div>
  </footer>
);

export default Footer;
