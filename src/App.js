import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Layout from "./Components/Layout/Layout";
import EditContact from "./Components/EditContact/EditContact"
import NewContact from "./Components/NewContact/NewContact";
import Categories from "./Components/Categories/Categories";
import EditCategory from "./Components/EditCategory/EditCategory";
import NewCategory from "./Components/NewCategory/NewCategory";
import "./assets/style.scss";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="edit/:id" element={<EditContact />} />
                    <Route path="new" element={<NewContact />} />
                    <Route path="categories" element={<Categories />}>
                        <Route path="edit/:id" element={<EditCategory />} />
                        <Route path="new" element={<NewCategory />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
