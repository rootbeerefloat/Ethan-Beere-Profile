// src/components/HelloWorld.tsx
import styled from 'styled-components';
import animateCircuit from './hooks/circuitCode';

const CircuitCanvas = styled.canvas`
  width: 100%;
  height: 100vh;`

const circuit = () => {
    animateCircuit();

    return (
        <CircuitCanvas id="CircuitCanvas" />
    );
};

export default circuit;
