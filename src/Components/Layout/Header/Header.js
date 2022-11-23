import './Header.scss';
//mport SearchBar from '../../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="header">
            <Link to="/">
               <h1>PhoneBook</h1> 
            </Link>
            <div>
                {/* <SearchBar /> */}
            </div>
            


        </div>


    );
}

export default Header; 
