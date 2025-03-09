import { Link } from "react-router";
function Error_404() {
    return (
        <div>
            <h1 style={{ color: "red", textAlign: "center" }}>opps 404 page error </h1>
            <Link to="/" ><h2  style={{textAlign:'center',padding:'30px'}}>Go to Home page</h2> </Link>
            <img style={{width:"98%"}}  src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg.avif" alt="404 error page "  />
        </div>
    )
}
export default Error_404;