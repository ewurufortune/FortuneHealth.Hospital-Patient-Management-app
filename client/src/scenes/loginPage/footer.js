import React from 'react';
import { Layout, Row, Col, Space } from 'antd';
import { GithubOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', background: '#001529', color: 'white' }}>
      <Row justify="center">
        <Col>
          <Space size="large">
            <a href="https://github.com/ewurufortune" target="_blank" rel="noopener noreferrer">
              <GithubOutlined style={{ fontSize: '20px' }} />
            </a>
            <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined style={{ fontSize: '20px' }} />
            </a>
          
            <a href="https://www.linkedin.com/in/fortuneewuru/" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined style={{ fontSize: '20px' }} />
            </a>
            
          </Space>
        </Col>
      </Row>
      <p>©Fortune Ewuru, 2024</p>
    </Footer>
  );
};

export default AppFooter;
