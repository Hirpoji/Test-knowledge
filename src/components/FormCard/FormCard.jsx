import Button from "../Button/Button.jsx";

const FormCard = () => {
    return (
        <div className="w-full bg-black rounded-xl">
            <img src={"https://framerusercontent.com/images/c0fYGdIy9BH20GAQg1hrUZDg.jpg?scale-down-to=512"}
                 className="h-100 w-full rounded-t-xl p-1  ">

            </img>
            <div className="p-6 flex flex-col justify-center pt-4 gap-6">
                <div className="flex flex-col justify-center gap-2">
                    <h3 className="font-bold">Название</h3>
                    <p className="text-gray-500 text-xl font-bold">Описание
                        Описание
                        Описание
                        Описание
                        Описание
                        Описание
                        Описание
                        Описание
                        ОписаниеОписаниеОписаниеОписание
                        Описание </p>
                </div>
                <div className="flex justify-between items-center ">
                    <p className="text-[#FFEE9C] text-xl font-bold">Апр 29, 2024</p>
                    <Button color="bg-white border-white text-black hover:text-white">Редактировать</Button>
                </div>
            </div>

        </div>
    )
}

export default FormCard;