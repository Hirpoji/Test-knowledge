import FormCard from "./FormCard.jsx";

const FormCardList = () => {
    return (
        <div
            className="max-w-[1480px] mx-auto w-full text-white grid grid-cols-2 gap-5 py-20 px-10">
            <FormCard/>
            <FormCard/>
        </div>
    )
}

export default FormCardList;