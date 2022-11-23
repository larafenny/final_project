import { Link, Outlet } from "react-router-dom";
import { useCategories } from "../Hooks/Custom";
import Row from "./Row/Row";
import { useState, useEffect } from "react";
// import FetchGroupBy from "../FetchGroupBy/FetchGroupBy";

const Categories = () => {

    const { result: categories, isLoading, error, mutate } = useCategories();

    const [isVisible, setIsVisible] = useState(true);
    const [page, setPage] = useState("");

    useEffect(() => {
        switch (page) {
            case "new":
                setIsVisible(false);
                break;
            case "edit":
                setIsVisible(false);
                break;
            case "":
                setIsVisible(true);
        }
    }, [page])
    if (error) {
        return <div>Error: {error.message}</div>
    }
    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className="contacts-header-container mb">
                <h3 className="text-white">Categorie</h3>
                <div className="">
                    <Link to="/categories/new" className={"btn btn-secondary my-4" + (!isVisible ? "d-none" : "")} >+</Link>
                </div>
            </div>   
                     
            <div className="row">
                <div className="col">
                    <Outlet context={{setPage, mutate}} />
                </div>
            </div>

            <div className="contacts-list">
                    {categories.map(c => {
                        return <Row key={c.id} category={c} mutateFn={mutate} />
                    })}
            </div>

            {/* <div>
                <FetchGroupBy />
            </div> */}
            
        </>
    );
}

export default Categories;