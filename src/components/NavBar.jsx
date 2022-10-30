import styled from "styled-components";
import { Logo } from "../styles/formStyles";
function NavBar() {
  return (
    <Nav>
      <Logo>Lama chat</Logo>
      <User>
        <img
          src="https://media.gq.com.mx/photos/62a2346ddca0fa1ea65f7d10/16:9/w_2560%2Cc_limit/chris%2520evans-1401854667.jpg"
          alt=""
        />
        <span>Jhon</span>
        <button>Log Out</button>
      </User>
    </Nav>
  );
}

export default NavBar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2f2d52;
  height: 3.1rem;
  padding: 0.5rem;

  ${Logo} {
    color: #ddddf7;
  }

  @media screen and (max-width: 768px) {
    ${Logo} {
      display: none;
    }
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    background-color: #ddddf7;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    object-fit: cover;
  }

  button {
    color: #ddddf7;
    background-color: #5d5b8d;
    font-size: 0.5rem;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    button {
      position: absolute;
      
      bottom: 10px;
    }
  }
`;
