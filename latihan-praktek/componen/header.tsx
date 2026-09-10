import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="flex flex-row justify-between gap-20 gap-y-5 items-center p-4 bg-[url('/images/back.png')] bg-cover bg-center border-12 border-pink-200 text-2xl font-bold text-black">
        <div className="w-1/4 flex justify-end">
          <div className="border-6 w-30 h-30 border-pink-200 rounded-full overflow-hidden">
            <Image
              src="/images/pp.png"
              alt="El_Katon"
              width={250}
              height={250}
              className="rounded-full w-30 h-30"
            />
          </div>
          <div>
            <p className="text-lg font-bold text-center text-white">El_Katon</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;