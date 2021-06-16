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
        height: stretchVertical ? 'calc(100% - 10px)' : undefined,
        borderRadius: '0px',
        marginLeft: '15px',
        border: '1px solid #1890ff',
        ...style,
      }}
    >
      {children}
    </Wrapper>
  );
}
