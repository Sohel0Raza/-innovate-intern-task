export default function Overview() {
  return (
    <div className="bg-gradient-to-b from-[#1b6841] to-[#6BE6A8] mt-[200px]">
      <div className="md:w-[90%] mx-auto flex relative">
        <div className="text-black w-[40%] py-20 px-2">
          <h2 className="text-4xl font-bold ">Overveiw</h2>
          <p className="py-10 text-xl pr-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="absolute right-0 -top-44 w-[60%]">
          <div className="flex justify-between w-full">
            <div className="w-[300px] h-[420px] bg-[#FF9A9A]"></div>
            <div className="w-[200px] h-[300px] bg-[#CFAAFF]"></div>
            <div className="w-[200px] h-[300px] bg-[#A0FCD9]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
