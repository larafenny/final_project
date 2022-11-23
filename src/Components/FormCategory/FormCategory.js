import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FloatingLabel } from "react-bootstrap";
import { useSubmitCategory } from "../Hooks/Custom";

const FormCategory = ({ category: { id = 0, name = "" } = {}, onLinkClick = () => {}, mutateFn = () => {} }) => {

    const [inputValues, setInputValues] = useState({
        name: name,
    });

    const onSubmit = useSubmitCategory(id);
    const navigate = useNavigate();

    useEffect(() => {
        setInputValues({
            name: name
        });
    }, [name]);

    const onSubmitSuccess = () => {
        navigate("/categories", {replace: true});
        mutateFn();
    }

    const handleChange = (e) => {
        setInputValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }
    
    const handleSubmit = (e) => {
        if(id > 0){
            onSubmit(e, inputValues, onSubmitSuccess);
        }else {
            const newCategory = {
                name: inputValues.name
            }
            onSubmit(e, newCategory, onSubmitSuccess);
        }
        onLinkClick("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col">
                    <FloatingLabel controlId="txtName" label="Inserisci il nome della nuova categoria" className="mb-3">
                        <input name="name" value={inputValues.name} onChange={handleChange} className="form-control" placeholder="Nome della nuova categoria" />
                    </FloatingLabel>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <button type={"submit"} className="btn me-3 mb-3 btn-info">Salva</button>
                    <Link to="/categories" className="btn mb-3 btn-danger" onClick={() => {onLinkClick("")}}>Annulla</Link>
                </div>
            </div>
        </form>
    );
}

export default FormCategory;