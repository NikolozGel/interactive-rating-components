import React from "react";
import illustration from "/images/illustration-thank-you.svg";

export default function Result({ rate }) {
  return (
    <div>
      <div
        className="w-[327px] bg-black-gradient pt-[24px] pb-[32px] px-[24px] rounded-[15px] pt-[34px]
      sm:w-[412px] sm:h-[416px] sm:pt-[45px] sm:pl-[32px] sm:pr-[40px]
      "
      >
        <div className="flex justify-center mb-[24px] sm:mb-[32px]">
          <img src={illustration} />
        </div>
        <div className="flex justify-center items-center mb-[24px] sm:mb-[32px]">
          <div className="w-[168px] h-[32px] bg-[#262E38] rounded-[22px] flex justify-center items-center sm:w-[193px]">
            <p className="text-[#FC7614] text-[14px] leading-[22px] sm:text-[15px]">
              You selected {rate} out of 5
            </p>
          </div>
        </div>

        <h1 className="text-center text-[24px] text-[#fff] font-bold mb-[9px] sm:text-[32px] sm:mb-[7px]">
          Thank you!
        </h1>
        <p className="text-center text-[14px] text-[#969FAD] leading-6 sm:text-[15px]">
          We appreciate you taking the time to give a rating. If you
          ever need more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
