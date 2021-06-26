import React from 'react';
import styled from 'styled-components';
import {Col, Image, Layout, Row} from 'antd';
import img from '../assets/img.png';
import mobilescreen from '../assets/mobilescreen.png';
const { Content } = Layout;

const Wrapper = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
  .borderNone .ant-select-selector {
    border: none !important;
  }
`;

const AndroidWrapper = styled.div`
  height: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px 16px;
  font-family: 'Roboto', sans-serif;
    text-align: center;
    vertical-align: middle;
    line-height: 90px;
    margin-top: 90px;
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
                          To provide you the best user interface to trade Solana SPL tokens with enthusiasm.<br />
                      </div>
                      <div
                          style={{
                              height: '100%',
                              backgroundImage:   "url(" + mobilescreen + ")",
                              backgroundPosition: 'center',
                              backgroundSize: 'contain',
                              backgroundRepeat: 'no-repeat'
                          }}>
                      </div> <br /><br />
                      <AndroidWrapper>
                          <Row>
                              <Col span={24}><h2><a href={"http://app.appsgeyser.com/14000580/Samoyed%20Lover%20DEX"} target="_blank" rel="noopener noreferrer" >Download Andriod App</a></h2></Col>
                              <Col span={24}><Image preview={false}  src={img}></Image></Col>
                          </Row>
                      </AndroidWrapper>
              </Content>
          </Layout>
      </Wrapper>
  );
}
