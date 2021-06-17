import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 5px;
  padding: 20px;
`;

export default function FloatingElement({
  style = undefined,
  children,
  stretchVertical = false,
}) {
  return (
    <Wrapper
      className="floatingElementWrapper"
      style={{
        border: '1px solid #E0E0FB',
        borderRadius: '15px',
        height: stretchVertical ? 'calc(100% - 10px)' : undefined,
        marginLeft: '15px',
        ...style,
      }}
    >
      {children}
    </Wrapper>
  );
}
