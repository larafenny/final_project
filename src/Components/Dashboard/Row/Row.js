import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useDelete } from "../../Hooks/Custom";
import "./Row.scss";


const Row = ({data: {id = 0, name = "", surname = "", telephoneNum = "", category = {id: 0, name: ""}}, mutateFn = () => {}}) => {
    
    const performDelete = useDelete(id);

    const onDeleteComplete = () => {
        mutateFn();
    }

    const handleClick = () => {
        if(window.confirm("Sei sicuro di voler eliminare: " + name + " " + surname + " ?")) {
            performDelete(onDeleteComplete);
        }
    }

    return (
        <div>  
            <div className="single-contact">
                
                <div className="contact-phone-info">
                    <div className="contact-phone">
                        <a href="tel:{telephoneNum}" className="btn text-light me-2">
                            <FontAwesomeIcon icon={faPhone} />
                        </a>
                    </div>
                    <div className="contact-info">
                        <div>
                            {name} 
                        </div>
                        <div>
                             {surname}
                        </div>
                        <div>
                            {telephoneNum}
                        </div>
                    </div>
                    
                </div>
                <div className="contact-action">
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