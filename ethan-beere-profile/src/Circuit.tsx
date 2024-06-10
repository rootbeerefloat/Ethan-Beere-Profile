// src/components/HelloWorld.tsx
import styled from 'styled-components';
import animateCircuit from './hooks/circuitCode';

const CircuitCanvas = styled.canvas`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;`

const SparkCanvas = styled.canvas`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;`

const CircuitContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;`

const circuit = () => {
  animateCircuit();

  return (
    <CircuitContainer>
      <CircuitCanvas id="CircuitCanvas" />
      <SparkCanvas id="SparkCanvas" />
    </CircuitContainer>
  );
};

export default circuit;
