import { useParams,NavLink } from "react-router";

function UserDetails() {
    const paramData = useParams();
    console.log(paramData);
    
    return (
        <div>
            <h2>it is user details  page </h2>
            <h2>user id id :{paramData.id}</h2>
            <NavLink to={"/"}>go to home page </NavLink>
        </div>
    )
}
export default UserDetails;