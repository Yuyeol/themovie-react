import React, { useEffect, useRef, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { PINK } from "Styles";
import logoImg from "assets/LOGO.png";
import { BLACK, WHITE } from "../../Styles";
import { TiThMenu } from "react-icons/ti";

const Container = styled.div`
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 53px;
  background-color: rgba(20, 20, 20, 0.7);
  display: flex;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.5);
  .logo {
    display: flex;
    align-items: center;
    margin: 0 10px;

    .logo-img {
      width: 90px;
    }
  }
  .header-list {
    display: flex;
    flex-wrap: wrap;
  }
  .menu {
    display: none;
    align-items: center;
    font-size: 28px;
    flex: 1;
    justify-content: flex-end;
    margin-right: 10px;
  }
  @media screen and (max-width: 700px) {
    .header-list {
      display: none;
    }
    .menu {
      display: flex;
    }
    .menu-modal {
      position: absolute;
      background-color: ${BLACK};
      right: 0;
      .header-item {
        background-color: ${BLACK};
      }
    }
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
  const [toggleMenu, setToggleMenu] = useState(false);
  const menu = useRef(null);
  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const handleClickOutside = ({ target }) => {
    if (menu.current && !menu.current.contains(target)) setToggleMenu(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
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
            Hom
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
        <Link to="/search">
          <Item className="header-item" selected={pathname === "/search"}>
            Search
          </Item>
        </Link>
      </div>
      <div className="menu" onClick={handleMenu} ref={menu}>
        <TiThMenu />
      </div>
      {toggleMenu && (
        <div className="menu-modal">
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
          <Link to="/search">
            <Item className="header-item" selected={pathname === "/search"}>
              Search
            </Item>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default withRouter(Header);
