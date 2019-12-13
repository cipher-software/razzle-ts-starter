import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 264px;
  height: 55px;
  background: ${(props) => props.theme.colors.main};
  border-radius: ${(props) => props.theme.borderRadius};
  color: white;
  border: 0px;
  cursor: pointer;
  span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => props.theme.fonts.sizes.p.size};
    line-height: 20px;
    margin: 0;
  }
  &:focus {
    outline: none;
  }
`;
