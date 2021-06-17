import React from 'react';
import styled from 'styled-components';
import ConvertForm from '../components/ConvertForm';
import {Row, Col, Image} from 'antd';
import Paragraph from "antd/es/typography/Paragraph";

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
      <Wrapper style={{marginTop: '100px' }}>
        <Row justify="center">
            <Col>
                <div>
                    <h1 style={{color: '#000000', fontWeight: 'bold', fontSize: '50pxs'}}>Samoyed Lover DEX - an unofficial Decentralized Exchange with the love of Samoyed Coin $SAMO</h1>
                </div>
            </Col>
            <Col>
                <Paragraph>
                    Samoyed Lover DEX is a decentralized exchange (DEX) and ecosystem that brings unprecedented speed and low transaction costs to decentralized finance. It is built on Solana and is completely permissionless.
                </Paragraph>
            </Col>
        </Row>
      </Wrapper>
  );
}
