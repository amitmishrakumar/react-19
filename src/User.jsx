import { NavLink } from "react-router";

function User() {
    const userData = [
        { id: 1, name: 'Anil' },
        { id: 2, name: 'Sam' },
        { id: 3, name: 'Sidhu' },
        { id: 4, name: 'Peter' },
        { id: 5, name: 'Bruce' },
        { id: 6, name: 'Tony' },
    ]
    return (
        <div>
            <h2>User List Page </h2>
            {
                userData.map((item) => (
                    <NavLink to={"/user/"+item.id}><h2>{ item.name}</h2></NavLink>
                ))
            }
        </div>
    )
}
export default User;