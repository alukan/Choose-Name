import styled from'styled-components';

const CenterContainer = styled.div({
  maxWidth: '400px',
  margin: '0 auto',
});

const Button = styled.button({
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
    marginRight: '10px'
  });

  const TopIconWrapper = styled.div({
    position: 'absolute',
    top: '0',
    right: '0',
    padding: '10px',
    cursor: 'pointer',
  });
  export { Button, TopIconWrapper, CenterContainer };