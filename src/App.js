import React, { Component } from 'react';
import './App.css';
import {Layout} from "antd";
import Row from "antd/es/grid/row";
import CategoryList from "./Container/category";
import CategoryDetail from './Container/categoryDetail';

const { Header, Content, Sider } = Layout;

class App extends Component {

    render() {
        return (
            <Layout>
                <Header className="header">
                    <h1 style={{color:'Yellow'}}>News feed</h1>
                </Header>
                <Content style={{ padding: '0 50px', border:'2px solid white' }}>
                    <Row style={{border:'2px solid white'}}>
                        <h1 style={{ marginLeft: '22%' }}>News Description</h1>
                    </Row>
                    <Layout style={{ padding: '28px 0', background: '#fff', border: '2px solid white' }}>
                        <Sider width={250} style={{ background: '#fff', paddingTop: '30px', border: '2px solid white'}} trigger={null}>
                            <h2 style={{paddingLeft:'7%', paddingTop:'20%'}}>Categories</h2>
                            <CategoryList/>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 350 }}>
                            <div style={{border:'2px solid white'}}>
                                <CategoryDetail/>
                            </div>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        )
    }
}

export default App;
