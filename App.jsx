import {
  Route,
  BrowserRouter as Routerbrowser,
  Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import { Dashboardagencyowner } from "./pages/Dashboardagencyowner.jsx";
import { Dashboardbank } from "./pages/Dashboardbank.jsx";
import { Dashboardtelecaller } from "./pages/Dashboardtelecaller.jsx";
import { Employeelist } from "./pages/Employeelist";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register";
import { Updateemp } from "./pages/Updateemp";
import Customer from "./pages/Customer";

const App = () => {
  return (
    <>
      <Routerbrowser>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register/emplist" element={<Employeelist />} />

          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboardtelecaller"
            element={<Dashboardtelecaller />}
          />

          <Route
            path="/dashboardagencyowner"
            element={<Dashboardagencyowner />}
          />
          <Route path="/pages/Customer" element={<Customer />} />
          <Route path="/dashboardbank" element={<Dashboardbank />} />
          <Route path="/updateemp/:id" element={<Updateemp />} />
        </Routes>
      </Routerbrowser>
    </>
  );
};

export default App;
