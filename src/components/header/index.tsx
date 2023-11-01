import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"
import Search from '../../image/search.png'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Logo from '../../image/logo.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { decodeToken } from '../../helper';
import userService from '../../service/userService';
import {  useState } from 'react';
import recipeService from '../../service/recipeService';


export const Header: React.FC = () =>  {
  const location = useLocation();
  const decode = decodeToken(localStorage.getItem("accessToken") || "")
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const setDataTitle = (e: any) => {
    setTitle(e.target.value);
  };
  
  const [refresh, setRefresh] = useState(true);
  
  const searchRecipe = async (search_quey:string) => {
    recipeService.searchRecipe(search_quey).then((response: any) => {
      navigate(`/recipes/${response.data.data[0].recipeId}`)
    })
    .catch((e: Error) => {
      console.log(e);
    });
  }




  const onLogout = async () => { 
    userService
      .signOut()
      .then((response: any) => {
        console.log(response.data);
        localStorage.removeItem("accessToken");
        setRefresh(!refresh);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  return (
   <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">  <Col xs={6} md={4}>
          <Image className="image-logo" src={Logo} roundedCircle />
        </Col></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/recipes">Recipes</Nav.Link>
            <Nav.Link href="/shows">Shows</Nav.Link>
            <Nav.Link href="/chefs">Chefs</Nav.Link>
            <Nav.Link href="/trending">Trending</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/sweepstakes">sweepstakes</Nav.Link>
            <Nav.Link href="/tv">What's on TV</Nav.Link>
          </Nav>
          <div  className="search-bar">
            <input type="text" placeholder="search anything" onChange={setDataTitle}></input>
            <button onClick={() => searchRecipe(title)}><img src={Search} alt='search'></img></button>
        </div>
        <Nav className="me-auto">
        {
                decode ?
                  (<>
                      <Link onClick={onLogout} to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Logout</Link>
                  </>)
                   :
                  (<>
                    <Link to="/login" className={`nav-link ${location.pathname === "/login" ? "active" : ""}`}>Login</Link>
                    <Link to="/register" className={`nav-link ${location.pathname === "/register" ? "active" : ""}`}>Register</Link>
                  </>)
              }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}