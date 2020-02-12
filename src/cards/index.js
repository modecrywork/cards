import React, { Component } from "react";
import styled from "styled-components";
import AxiosService from "./axiosService";
// components
import Card from "./card";

const FIELDS = [
  "full_name",
  "html_url",
  "clone_url",
  "downloads_url",
  "forks",
  "open_issues",
  "stargazers_count",
  "watchers_count",
  "language"
];

const dataCollector = (array, fields) => {
  return array.map(item => {
    const constructedObject = {};

    fields.forEach(field => {
      constructedObject[field] = item[field];
    });

    return constructedObject;
  });
};

class Cards extends Component {
  state = { data: [] };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const { data } = await AxiosService.sendRequiest(
      "get",
      "https://api.github.com/users/modecrywork/repos"
    );
    if (data?.length) this.setState({ data: dataCollector(data, FIELDS) });
  };

  render() {
    const { data } = this.state;
    return (
      <StyledContainer>
        {data.length && data.map(item => <Card {...item} key={item?.name} />)}
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  width: 80%;
  margin: auto;
`;

export default Cards;
