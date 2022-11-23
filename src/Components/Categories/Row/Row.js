import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import {useDeleteCategory} from "../../Hooks/Custom";
import "./row.scss";

const Row = ({category: {id=0, name=""}, mutateFn}) => {

    const onDelete = useDeleteCategory(id);
    const navigate = useNavigate();

    const onDeleteSuccess = () => {
        navigate("/categories", {replace: true});
        mutateFn();
    }

    const handleClick = () => {
        if(window.confirm("Sicuro di eliminare la categoria " + name + "?")) {
            onDelete(onDeleteSuccess);
        }
    }

    return (
        <div>            
            <div className="single-category">
                    <div className="category-info">
                        <div>
                            {name} 
                        </div>
                    </div>
                    
                <div className="category-action">
                    <span className="text">
                        <Link to={"edit/"+ id} className="btn me-3 text-white">
                            Modifica
                        </Link>
                    </span>
                    
                    <span className="icon"> 
                        <Link to={"edit/" + id}  className="btn text-light me-2">
                            <FontAwesomeIcon icon={faPen} />
                        </Link>
                    </span>

                    <span className="icon">
                        <button className="btn text-info" onClick={handleClick}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </span>

                    <span className="text">
                        <button className="btn text-info" onClick={handleClick}>
                            Elimina
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Row;