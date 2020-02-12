import React from "react";
import styled from "styled-components";
import { Card as UiCard, CardActions, CardContent } from "@material-ui/core";

const Card = () => {
  return <StyledUiCard>1</StyledUiCard>;
};

const StyledUiCard = styled(UiCard)`
  margin-bottom: 10px;
  height: 400px;
`;

export default Card;
