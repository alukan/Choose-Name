import styled from'styled-components';

const CardContainer = styled.div({
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '20px auto', 
    maxWidth: '400px',
    width: '100%', 
  });

const Title = styled.h2({
  fontSize: '18px',
  marginBottom: '10px',
});

const ButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
});

export { CardContainer, Title, ButtonContainer };