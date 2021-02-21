import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { PINK } from "Styles";
import logoImg from "assets/LOGO.png";
import { WHITE } from "../../Styles";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(20, 20, 20, 0.7);
  display: flex;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.5);
  .logo {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    .logo-img {
      width: 90px;
    }
  }
  .header-list {
    display: flex;
  }
`;
const Item = styled.div`
  text-align: center;
  width: 110px;
  color: ${WHITE};
  font-size: 22px;
  font-weight: 600;
  padding: 10px 0px;
  border-bottom: 3.5px solid
    ${(props) => (props.selected ? PINK : "transparent")};
  margin-bottom: 1px;
  transition: border-bottom 0.3s ease-in-out;
  &:hover {
    border-bottom: 3.5px solid rgba(218, 48, 93, 0.8);
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
            Home
          </Item>
        </Link>
        <Link to="/movies">
          <Item className="header-item" selected={pathname === "/movies"}>
            Movies
          </Item>
        </Link>
        <Link to="/shows">
          <Item className="header-item" selected={pathname === "/shows"}>
            Shows
          </Item>
        </Link>
        <Link to="/mylist">
          <Item className="header-item" selected={pathname === "/mylist"}>
            My List
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
