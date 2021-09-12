import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";

const Header = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  backdrop-filter: ${(props) => (props.scrollY > 70 ? "blur(2px)" : "normal")};
`;

const List = styled.ul`
  height: 100%;
  display: flex;
`;

const Item = styled.li`
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: ${(props) => (props.current ? 1 : 0.6)};
`;

const SLink = styled(Link)`
  all: unset;
  font-size: 600;
`;

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

export default withRouter((props) => {
  const {
    location: { pathname },
  } = props;

  const { y } = useScroll();
  return (
    <Header scrollY={y}>
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">Netfilx</SLink>
        </Item>
        <Item current={pathname === "/movies"}>
          <SLink to="/movies">Movies</SLink>
        </Item>
        <Item current={pathname === "/tv"}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname === "/search"}>
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
    </Header>
  );
});
