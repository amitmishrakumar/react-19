import { Link } from "react-router"
import './header.css'
import { Outlet } from "react-router"
export default function NavBar() {
    return (
        <div>

            <div className="header">
                <div>
                    <Link className="link"><h2>Logo</h2></Link>
                </div>


                <div>
                    <ul>
                        <li>
                            <Link className="link" to="/">home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/user/about">about</Link>
                        </li>
                        <li>
                            <Link className="link" to="/user/login">login</Link>
                        </li>
                        <li>
                            <Link className="link" to="/college">college</Link>
                        </li>

                        <li>
                            <Link className="link" to="/user">user</Link>
                        </li>
                    </ul>
                </div>
            </div>


            <Outlet />



        </div>
    )
}