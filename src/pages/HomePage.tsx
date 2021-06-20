import React from 'react';
import styled from 'styled-components';
import {Layout} from 'antd';
const { Content } = Layout;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
  .borderNone .ant-select-selector {
    border: none !important;
  }
`;

export default function ConvertPage() {
  return (
      <Wrapper>
          <Layout>
              <Content>
                  <div className="contentWrapper">
                      To provide you the best user interface to trade Solana SPL tokens with enthusiasm.
                  </div>
              </Content>
          </Layout>
      </Wrapper>
  );
}
