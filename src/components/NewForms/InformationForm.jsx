import Button from "../Button/Button.jsx";

const InformationForm = () => {
    const date = new Date();


    return (
        <div className="w-full bg-black rounded-xl mt-20">
            <div className="p-6 flex flex-col justify-center gap-6">
                <div className="flex flex-col justify-center gap-4">
                    <input placeholder={"Название"}/>
                    <input placeholder={"Описание"}/>
                </div>
                <div className="flex justify-between items-center ">
                    <p className="text-[#FFEE9C] text-xl font-bold">{date.toString()}</p>
                    <Button color="bg-white border-white text-black hover:text-white">Добавить фото</Button>
                </div>
            </div>
        </div>
    )
}

export default InformationForm;