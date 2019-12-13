import React from 'react';
import { StyledButton } from './styles';

export const Button = (props: any) => {
  return (
    <StyledButton>
      <span>{props.children}</span>
    </StyledButton>
  );
};
