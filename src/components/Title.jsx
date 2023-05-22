import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

function Title(props) {
  return (
    <div className="mt-[4.375em] mb-[2.5em] flex justify-between items-center h-[48px] desktop:w-[540px] mobile:w-[327px]">
      <h1 className="font-joe h-[48px] text-heading-dk tracking-[0.4em] font-bold text-lightgray">
        TODO
      </h1>
      <div className="theme-icon w-[26px] h-[26px] cursor-pointer">
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
