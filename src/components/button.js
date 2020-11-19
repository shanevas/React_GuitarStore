import styled from 'styled-components';

export const ButtonContainer = styled.button`
padding: 2px 10px;
  margin: 10px;
  color: white;
  background-color: ${props=> props.cart?"var(--mainPurple)": "black"};
  border: 2px solid var(--mainPurple);
  border-radius: 8%;
  transition: all 0.3s ease-in-out;
  
  &:hover{
   background-color: var(--mainPurple) !important;
    outline: none !important;
  }
  
  &:active{
    border: 2px solid var(--mainPurple) !important;
    outline: none !important;
  }
  
  &:focus{
  border: 2px solid var(--mainPurple) !important;
  outline: none !important;
  }
`;
