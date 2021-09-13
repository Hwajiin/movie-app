import React from "react";
import styled from "styled-components";
import Loader from "../../components/loader";
import Poster from "../../components/poster";
import Section from "../../components/section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const Form = styled.form`
  position: relative;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  padding: 7px 10px;
  font-size: 13px;
`;

const Button = styled.button`
  all: unset;
  position: absolute;
  right: 10px;
  top: 50%;
  width: 18px;
  height: 18px;
  background-color: var(--grey-color);
  border-radius: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 13px;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
`;

const SearchPresenter = ({
  onSubmit,
  onChange,
  isLoading,
  onClear,
  searchTerm,
  data: { moviesResults, tvResults },
}) => {
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="검색어를 입력해주세요"
          value={searchTerm}
          onChange={onChange}
        />
        <Button onClick={onClear}>
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </Form>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {moviesResults && moviesResults.length > 0 && (
            <Section title="영화 검색 결과">
              {moviesResults.map((item) => (
                <Poster
                  key={item.id}
                  content={item}
                  id={item.id}
                  title={
                    item.original_title
                      ? item.original_title
                      : item.original_name
                  }
                  poster={item.poster_path}
                />
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV 프로그램 검색 결과">
              {tvResults &&
                tvResults.map((item) => (
                  <Poster
                    key={item.id}
                    content={item}
                    id={item.id}
                    title={
                      item.original_title
                        ? item.original_title
                        : item.original_name
                    }
                    poster={item.poster_path}
                  />
                ))}
            </Section>
          )}
        </>
      )}
    </Container>
  );
};

export default SearchPresenter;
