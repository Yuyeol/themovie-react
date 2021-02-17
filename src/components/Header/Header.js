import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { YELLOW } from "Styles";
import logoImg from "assets/LOGO.png";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(16, 24, 32, 0.8);
  display: flex;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  .logo {
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-right: 10px;
    .logo-img {
      width: 50px;
    }
  }
  .header-list {
    display: flex;
  }
`;
const Item = styled.div`
  text-align: center;
  width: 120px;
  color: white;
  font-size: 22px;
  font-weight: 600;
  padding: 10px 0px;
  border-bottom: 3px solid
    ${(props) => (props.selected ? YELLOW : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  &:hover {
    border-bottom: 3px solid rgba(254, 231, 21, 0.8);
  }
`;

const Header = ({ location: { pathname } }) => {
  return (
    <Container>
      <div className="logo">
        <Link to="/">
          <img className="logo-img" src={logoImg} alt="LOGO" />
        </Link>
      </div>
      <div className="header-list">
        <Link to="/">
          <Item className="header-item" selected={pathname === "/"}>
            Movies
          </Item>
        </Link>
        <Link to="/shows">
          <Item className="header-item" selected={pathname === "/shows"}>
            Shows
          </Item>
        </Link>
        <Link to="/recently">
          <Item className="header-item" selected={pathname === "/recently"}>
            Recently
          </Item>
        </Link>
        <Link to="/mylist">
          <Item className="header-item" selected={pathname === "/mylist"}>
            MyList
          </Item>
        </Link>
        <Link to="/search">
          <Item className="header-item" selected={pathname === "/search"}>
            Search
          </Item>
        </Link>
      </div>
    </Container>
  );
};

export default withRouter(Header);
