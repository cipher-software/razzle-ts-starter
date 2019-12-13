import React from 'react';
import { Logo } from '../../assets/icons';
import { Button } from '../../common/button';
import { StyledHeader } from './styles';

export const Header = (props: any) => {
  return (
    <StyledHeader>
      <Logo className="logo" />
      <nav>
        <p>Početna</p>
        <p>Početna</p>
        <p>Početna</p>
        <p>Početna</p>
        <p>Početna</p>
        <p>Početna</p>
        <p>Početna</p>
      </nav>
      <Button>Prijavi se</Button>
    </StyledHeader>
  );
};
