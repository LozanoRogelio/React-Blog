import {Link} from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="">
            <h2>Sorry</h2>
            <p>Sorry! That page can not be found!</p>
            <Link to="/">Back to Home</Link>
        </div>
     );
}
 
export default NotFound;