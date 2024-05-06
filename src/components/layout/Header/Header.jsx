import MenuBurger from "../Header/MenuBurger.jsx";
import Button from "../../Button/Button.jsx";
import Logo from "../../Icon/Logo.jsx";
import {IoSearch} from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Header = ({setIsOpenDrawer}) => {
    return (
        <div
            className="bg-[#ADE8FF] h-[100px] w-full fixed top-0 flex justify-center items-center border-black border-b-2 z-10 ">
            <div className="max-w-[1480px] w-full px-10 h-[100px] grid grid-cols-3 items-center ">
                <Logo/>
                <div className="flex items-center justify-center ">
                    <MenuBurger onClick={() => setIsOpenDrawer(true)}/>
                </div>
                <div className="flex items-center justify-end gap-x-8">
                    <IoSearch className="w-8 h-8"/>
                    <Button>Вход Регистрация</Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
