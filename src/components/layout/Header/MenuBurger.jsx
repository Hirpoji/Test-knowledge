// eslint-disable-next-line react/prop-types
const MenuBurger = ({onClick}) => {
  return (
    <div className="w-10 h-10 flex gap-y-2 flex-col justify-center items-center cursor-pointer" onClick={onClick}>
      <div className="w-10 h-[3px] bg-black"></div>
      <div className="w-10 h-[3px] bg-black"></div>
    </div>
  );
};

export default MenuBurger;
