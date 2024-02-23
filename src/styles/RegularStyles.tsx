import styled, { keyframes, css } from 'styled-components';

const CenterContainer = styled.div({
  maxWidth: '400px',
  margin: '0 auto',
});

const pulsate = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
    ${css`animation: ${pulsate} 1s infinite;`}
  }
`;

const TopIconWrapper = styled.div({
  position: 'absolute',
  top: '0',
  right: '0',
  padding: '10px',
  cursor: 'pointer',
});


export { Button, TopIconWrapper, CenterContainer };