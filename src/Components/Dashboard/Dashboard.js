import {useContacts, useCategories} from "../Hooks/Custom";
import Row from "./Row/Row";
import { Link } from "react-router-dom";
import "./Dashboard.scss";

const Dashboard = () => {

    const {result: contacts, isLoading, error, mutate} = useContacts({includeCategories: true});

     const contactsAscendent = [...contacts].sort((a, b) =>
         a.name > b.name ? 1 : -1,
   );       

    if(error) {
        return (<div>Error: {error.message}</div>)
    }
    if(isLoading){
        return (<div>Loading...</div>)
    }

    return (
        <>
            <div className="contacts-header-container">
                <h3 className="text-white">Contatti</h3>
                <div className="">
                    <Link to="new" className="btn btn-secondary my-4">+</Link>
                </div>
            </div>
            
            
            <div className="contacts-list">
                    {contactsAscendent.map(c => {
                        return <Row key={c.id} data={c} mutateFn={mutate} />
                    })}
            </div>
            
        </>
    );
}

export default Dashboard;