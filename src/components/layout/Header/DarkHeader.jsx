import Button from "../../Button/Button.jsx";
import Logo from "../../Icon/Logo.jsx";
import {IoSearch} from "react-icons/io5";
import MenuBurgerClose from "./MenuBurgerClose.jsx";

// eslint-disable-next-line react/prop-types
const DarkHeader = ({setIsOpenDrawer}) => {
    return (
        <div className="h-[100px] w-full flex fixed z-30 left-0 right-0 justify-center items-center">
            <div
                className="max-w-[1480px] w-full px-10 h-[100px] grid grid-cols-3 items-center  border-black border-b-2">
                <Logo/>
                <div className="flex items-center justify-center ">
                    <MenuBurgerClose onClick={() => setIsOpenDrawer(false)}/>
                </div>
                <div className="flex items-center justify-end gap-x-8">
                    <IoSearch className="w-8 h-8 text-white cursor-pointer"/>
                    <Button color={"bg-white border-white text-black hover:text-white"}>Вход Регистрация</Button>
                </div>
            </div>
        </div>
    );
};

export default DarkHeader;
