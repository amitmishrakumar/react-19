import About from "./About";
import Home from "./Home.";
import { Routes, Route, Link } from "react-router";
import Login from "./Login";
import NavBar from "./NavBar";
import Error_404 from "./Error_404";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import CollegeDetails from "./CollegeDetails";
import User from "./User";
import UserDetails from "./UserDetails";
function Amit_App() {

    return (
        <div>

            {/* <NavBar /> */}

            <Routes>

                <Route element={<NavBar />}>
                    <Route path="/" element={<Home />}  ></Route>
                    <Route path="/user" element={<User/>}></Route>
                    <Route path="/user/:id" element={<UserDetails/>}></Route>
                    



                    <Route path="/user">
                        <Route path="/user/login" element={<Login />} ></Route>
                        <Route path="/user/about" element={<About />}></Route>
                    </Route>
                </Route>

                {/* <Route path="/" element={<Home />}  ></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/login" element={<Login />} ></Route>

 */}



                <Route path="/College" element={<College />}>
                    <Route index element={<Student />}></Route>
                    <Route path="Department" element={<Department />}></Route>
                    <Route path="CollegeDetails" element={<CollegeDetails />}></Route>
                </Route>

                <Route path="/*" element={<Error_404 />}></Route>
            </Routes>

        </div>
    )
}
export default Amit_App;