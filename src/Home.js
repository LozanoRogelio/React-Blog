import { useState, useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from './useFetch';


const Home = () => {
    // Colon after data lets you name it blogs to fit the blogs={blogs in return}
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    
    return (  
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
           { blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        

        </div>
        
    );
}
 
export default Home;