import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

function Title(props) {
  return (
    <div className="w-[327px] mx-auto mt-[3em] mb-[2.5em] flex justify-between items-center h-[20px] desktop:h-[48px] desktop:w-[540px] desktop:mt-[4.375em] ">
      <h1 className="font-joe h-[30px] text-heading-mb desktop:text-heading-dk tracking-[0.4em] font-bold text-lightgray">
        TODO
      </h1>
      <div className="theme-icon w-[20px] h-[20px] desktop:w-[26px] desktop:h-[26px] cursor-pointer">
        <img
          src={props.isDarkTheme ? sun : moon}
          alt="dark theme icon"
          onClick={props.toggleMode}
        />
      </div>
    </div>
  );
}

export default Title;
