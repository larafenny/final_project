import { useState, useEffect } from "react";
import { useSubmit } from "../Hooks/Custom";
import { Link, useNavigate } from "react-router-dom";
import FetchSelect from "../FetchSelect/FetchSelect";
import { FloatingLabel } from "react-bootstrap";



const FormContact = ({ data: { id = 0, name = "", surname = "", telephoneNum = "", categoryId = 0 } = {}, mutateFn = () => { }, resetFn = () => { } }) => {

    const navigate = useNavigate();
    const submitFunction = useSubmit(id);

    const [inputValues, setInputValues] = useState({
        id: id,
        name: name,
        surname: surname,
        telephoneNum: telephoneNum,
        categoryId: categoryId
    });

    useEffect(() => {
        setInputValues({
            name: name,
            surname: surname,
            telephoneNum: telephoneNum,
            categoryId: categoryId
        })
    }, [name, surname, telephoneNum, categoryId]);

    const handleChange = (e) => {
        setInputValues(prev => ({
            ...prev,
            [e.target.name]: (e.target.name === "categoryId") ? Number(e.target.value) : e.target.value
        }));
    }

    const handleSubmit = (e) => {
        if (id > 0) {
            submitFunction(e, inputValues, onSubmitSuccess);
        }
        else {
            const newContact = {
                name: inputValues.name,
                surname: inputValues.surname,
                telephoneNum: inputValues.telephoneNum,
                categoryId: inputValues.categoryId
            }
            submitFunction(e, newContact, onSubmitSuccess);
        }
    }

    const onSubmitSuccess = () => {
        navigate("/", { replace: true });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <FloatingLabel controlId="txtName" label="Nome" className="mb-3">
                        <input name="name" value={inputValues.name} onChange={handleChange} className="form-control" placeholder="Nome" />
                    </FloatingLabel>
                </div>
                <div className="col-md-6">
                    <FloatingLabel controlId="txtSurname" label="Cognome" className="mb-3">
                        <input name="surname" value={inputValues.surname} onChange={handleChange} className="form-control" placeholder="Cognome" />
                    </FloatingLabel>
                </div>
                <div className="col-md-9">
                    <FloatingLabel controlId="txtTelephoneNum" label="Telefono" className="mb-3">
                        <input name="telephoneNum" value={inputValues.telephoneNum} onChange={handleChange} className="form-control" placeholder="Telefono" />
                    </FloatingLabel>
                </div>
                <div className="col-md-3">
                    <div controlId="txtCategory" label="Tel" className="mb-4">
                        <FetchSelect name="categoryId" value={inputValues.categoryId} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-12 text-center">
                    <button type={"submit"} className="btn btn-info me-3 mb-3">Salva</button>
                    <Link to="/" className="btn btn-danger mb-3">Annulla</Link>
                </div>
            </div>
        </form>
    );
}

export default FormContact;