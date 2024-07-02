import star from "/images/icon-star.svg";
import "./Rate.css";

export default function Rate({ rate, setRate, setSubmit }) {
  const buttons = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="w-[327px] bg-black-gradient pt-[24px] pb-[32px] px-[24px] rounded-[15px] sm:w-[412px] sm:h-[416px] sm:pt-[32px] sm:pl-[32px] sm:pr-[39px] ">
        <div
          className="bg-[#262E38] w-[40px] h-[40px] flex items-center justify-center rounded-[50%] mb-[16px]
        sm:mb-[30px] sm:w-[48px] sm:h-[48px]
        "
        >
          <img src={star} alt="starImg" />
        </div>
        <div className="text-start">
          <h1 className="text-[#fff] text-[24px] font-bold mb-[10px] sm:text-[28px] sm:mb-[7px]">
            How did we do?
          </h1>
          <p className="text-[#969FAD] text-[14px] leading-[26px] mb-[24px]">
            Please let us know how we did with your support request.
            All feedback is appreciated to help us improve our
            offering!
          </p>
        </div>

        {buttons.map((item) => (
          <button
            style={{
              backgroundColor: rate == item ? "#FC7614" : "",
              color: rate == item ? "#7C8798" : "",
            }}
            key={item}
            className={`w-[42px] h-[42px] bg-[#262E38]
        rounded-[50%] text-[#7C8798] mb-[24px] sm:w-[51px] sm:h-[51px]  btns ${
          item < 5 ? "mr-[17px] sm:mr-[21px] sm:mb-[32px]" : ""
        }`}
            onClick={() => {
              setRate(item);
            }}
          >
            {item}
          </button>
        ))}

        <button
          onClick={() => {
            rate && setSubmit(true);
          }}
          className="w-[279px] h-[45px] bg-[#FC7614] text-white text-[14px] rounded-[22px] font-bold tracking-[2px] submit-btn sm:w-[341px] h-[45px]"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}
