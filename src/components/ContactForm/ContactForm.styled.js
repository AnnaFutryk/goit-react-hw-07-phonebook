import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: #3bd9d9;
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 12px;
  color: white;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  color: #ddd;
  font-size: 20px;
  color: black;
  transition: transform 250ms linear, box-shadow 250ms linear;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3),
      inset 0px -6px 12px rgba(0, 0, 0, 0.3);
  }
`;
