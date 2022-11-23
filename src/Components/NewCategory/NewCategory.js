import FormCategory from "../FormCategory/FormCategory";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

const NewCategory = () => {

    const {setPage, mutate} = useOutletContext();

    useEffect(() => {
        setPage("new")
    });

    return (
        <div className="mt-5">
            <FormCategory onLinkClick={setPage} mutateFn={mutate} />
        </div>
    );
}

export default NewCategory;