import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import "./MenuTab.scss"


const MenuTab = () => {
    return (
        <>
            <div className="menu-tab-container">
                <Nav variant="" className="tab-container nav" defaultActiveKey="Contatti">
                    <Nav.Item>
                        <Link className="nav-link" to="/">Contatti</Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Link className="nav-link" to="/categories">Categorie</Link>

                    </Nav.Item>
                    
                </Nav>
            </div>
        </>
    );
}

export default MenuTab