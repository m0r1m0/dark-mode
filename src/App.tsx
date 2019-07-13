import React from 'react';
import './App.css';
import { useTheme } from './themeContext';
import styled from './components/styled';

const App: React.FC = () => {
  const { colorMode, setColorMode } = useTheme();
  return (
    <Container>
      <p>current color mode: {colorMode}</p>
      <button onClick={setColorMode}>toggle color mode</button>
    </Container>
  );
};

export default App;

const Container = styled.div`
  height: 100%;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
`;
