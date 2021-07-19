import { Link } from 'react-router-dom'

const  Navbar =  () => {
    return (
        <nav className= "navbar">
            <img className= "picon" src='/images/bicon.png' alt=''/>
            <h1> Book Store </h1>
            <div className= "links">
                <Link to= "/">Home</Link>
                <Link to="/create">Add Book</Link>
                <Link to= "/buy">Buy Book </Link>
                
            </div>
        </nav>
    );
}
export default Navbar;