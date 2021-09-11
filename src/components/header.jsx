import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  backdrop-filter: blur(1px);
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

export default withRouter((props) => {
  const {
    location: { pathname },
  } = props;
  return (
    <Header>
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
