import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home.js';
import Categories from './Components/Categories/Categories';
import NewCategory from './Components/Categories/NewCategory/NewCategory';
import EditCategory from './Components/Categories/EditCategory/EditCategory';
import Contacts from './Components/Contacts/Contacts';
import NewContact from './Components/Contacts/NewContact/NewContact';
import EditContact from './Components/Contacts/EditContact/EditContact';



const App = () => {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} >
            <Route path="new" element={<NewCategory />} />
            <Route path="edit/:id" element={<EditCategory />} />
          </Route>
          <Route path="contacts" element={<Contacts />}>
            <Route path="new" element={<NewContact />}/>
            <Route path="edit/:id" element={<EditContact />}/>
          </Route>
        </Route>
      </Routes>
    </Router>

  )
};

export default App;
