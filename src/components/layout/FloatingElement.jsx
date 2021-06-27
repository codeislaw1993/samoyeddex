import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0px;
  padding: 15px;
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
        height: stretchVertical ? 'calc(100% - 10px)' : undefined,
        marginLeft: '-1px',
        marginBottom: '-1px',
        ...style,
      }}
    >
      {children}
    </Wrapper>
  );
}
