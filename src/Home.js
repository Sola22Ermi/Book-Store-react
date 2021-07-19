import Bloglist from './Bloglist'; 
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return(
        <div className = "Home">
            
            <img className="photo"  src="/images/dd.jpg" alt=""/>
            

            { error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title = "SEARCH AND FIND BOOK ON MARKET!" />}
            
        
        </div>
    );
}
export default Home;
//blogs={blogs} title= "Book Shelf!"
//props concept come here 
// const handleDelete = (id) => {
//   const newBooks = blogs.filter(blog=> blog.id !== id);
//  setBlogs(newBooks);   
//}
//fake rest api== json server
{/* <Bloglist blogs={blogs.filter((blog) => blog.author === "mario")} title = "The Brain book" />
            <button onClick= {() => setName('luigi')}>change name</button> */}