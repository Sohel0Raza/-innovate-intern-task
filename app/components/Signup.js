import Image from "next/image";
import image1 from "@/public/images/img1.jpg";
import user1 from "@/public/images/user1.jpg";

import image2 from "@/public/images/img2.jpg";
import user2 from "@/public/images/user2.jpg";

import image3 from "@/public/images/img3.jpg";
import user3 from "@/public/images/user3.jpg";

export default function Signup() {
  return (
    <div className="md:flex justify-between md:h-[600px] my-10 md:my-32 ">
      <div className="md:w-[55%] relative">
        <div className="w-[270px] h-[280px] absolute">
          <Image
            src={image1}
            className="w-full h-full rounded-2xl"
            placeholder="blur"
          />
          <div className="h-[80px] w-[80px] absolute -right-[30px] -bottom-[30px] border-[0.5rem] rounded-full border-white">
            <Image
              src={user1}
              className="w-full h-full rounded-full"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="w-[225px] h-[210px] absolute left-1/2 top-1/2 -translate-y-1/2 ">
          <Image
            src={image2}
            className="w-full h-full rounded-2xl"
            placeholder="blur"
          />
          <div className="h-[80px] w-[80px] absolute -right-[30px] -bottom-[30px] border-[8px] rounded-full border-white">
            <Image
              src={user2}
              className="w-full h-full rounded-full"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="w-[205px] h-[215px] absolute top-full left-[10%] -translate-y-[80%]">
          <Image
            src={image3}
            className="w-full h-full rounded-2xl"
            placeholder="blur"
          />
          <div className="h-[80px] w-[80px] absolute -right-[30px] -bottom-[30px] border-[0.5rem] rounded-full border-white">
            <Image
              src={user3}
              className="w-full h-full rounded-full"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <div className="md:w-[45%] flex flex-col items-center justify-center">
        <p className="p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore e.
        </p>
        <button className="btn btn-primary">Sign Up</button>
      </div>
    </div>
  );
}
