import { NavLink, Outlet } from "react-router";
function College() {
    return (

        <div
            className="college" style={{ textAlign: 'center', margin: '20px' }} >
            <h2>College page </h2>
            <NavLink to="/"><h2>go to home</h2> </NavLink>
            <NavLink className="link" to="">Student</NavLink>
            <NavLink className="link" to="Department">Department</NavLink>
            <NavLink className="link" to="CollegeDetails">CollegeDetails</NavLink>
            <Outlet />
        </div>

    )
}
export default College;