import { useParams } from "react-router-dom";
import {useContacts} from "../Hooks/Custom";
import Form from "../FormContact/FormContact";


const EditContact = () => {

    const { id } = useParams();
    const {result: contact, isLoading, error} = useContacts({id: id});

    if(error) {
        return <div>Error: {error.message}</div>
    }
    if(isLoading) {
        return <div>Loading...</div>
    }
    return (
        <>
            <h2 className="text-center">Modifica contatto</h2>
            <Form data={contact} />
        </>
    );
}


export default EditContact;