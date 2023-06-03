import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Api_Key = "c45a857c193f6302f2b5061c3b85e743";
function NavScrollExample() {
  const [searchQuery,setSearchQuery] = useState();
  const [timeoutId,setTimeoutId] = useState();
  const fetchData = async (movie_name)=>{
   const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${Api_Key}&language=en-US&query=${movie_name}&page=1`);
   console.log(response);
  //  setMovieList(response.data.Search)
  }
  const onTextChange = (event) =>{
    clearTimeout(timeoutId)
    setSearchQuery(event.target.value);
    const timeout  = setTimeout(()=>fetchData(event.target.value),500);
      setTimeoutId(timeout)
  }
  return (
    <Navbar bg="secondary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='px-5 text-white'>MovieDb</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style = {{color:"white"}} />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="ms-auto my-2 my-lg-0 fs-5"
            style={{ maxHeight: '140px' }}
            navbarScroll
          >
            <Nav.Link href="/" style = {{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="popular" style = {{color:"white"}}>Popular</Nav.Link>
            <Nav.Link href="toprated" style = {{color:"white"}}>TopRated</Nav.Link>
            <Nav.Link href="upcoming" style = {{color:"white"}}>UpComing</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control 
              type="search" value = {searchQuery} onChange={onTextChange}
              placeholder="Movie Name..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="btn btn-success text-white"  >Search</Button>
          </Form>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    
  );
}

export default NavScrollExample;