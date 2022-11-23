import { useParams } from "react-router-dom";
import { useCategories } from "../Hooks/Custom";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import FormCategory from "../FormCategory/FormCategory";


const EditCategory = () => {

    const {setPage, mutate} = useOutletContext();
    const {id} = useParams();

    const {result: category, isLoading, error} = useCategories({id: id});

    useEffect(() => {
        setPage("edit")
    })

    if(error) {
        return <div>Error: {error.message}</div>
    }
    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="mt-5">
        <FormCategory category={category} onLinkClick={setPage} mutateFn={mutate} />
        </div>
    );
}

export default EditCategory;