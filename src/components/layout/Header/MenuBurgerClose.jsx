// eslint-disable-next-line react/prop-types
const MenuBurgerClose = ({onClick}) => {
    return (
      <div className="w-10 h-10 flex gap-y-2 flex-col justify-center items-center cursor-pointer" onClick={onClick}>
        <div className="w-10 h-[3px] bg-white absolute z-101 rotate-45"></div>
        <div className="w-10 h-[3px] bg-white absolute z-102 -rotate-45"></div>
      </div>
    );
  };
  
  export default MenuBurgerClose;
  