import React from 'react';
import connect from "react-redux/es/connect/connect";
import {Tag, Row, Col} from "antd";
import '../button.css';
import {searchNews, sortNews} from "../Actions/action";

class CategoryDetail extends React.Component {

    render () {

        return (
            <div>
                <Row type="flex" style={{border: '2px solid white'}}>
                    <Col style={{backgroundColor: '#fff', padding: '3%', border: '2px solid white'}} span={24}>
                        <input style={{width: '99%'}} type="text" placeholder="Search" onChange={(e) => this.props.searchNews(e.target.value)}/>
                        <div className="dropdown">
                            <button className="dropbtn">View</button>
                            <div className="dropdown-content">
                                <a onClick={()=> this.props.sortNews("ASC")}>Ascending</a>
                                <a onClick={()=> this.props.sortNews("DSC")}>Descending</a>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row style={{border: '2px solid white'}}>
                    {
                        this.props.news.map((newsList) => {
                            return (
                                <Row key={newsList.heading} style={{border: '2px solid white'}}>
                                    <Row>
                                        <Col span={2}>
                                            <img style={{height: '10px', width: '10px'}} src={require('../comment.png')}
                                                 alt={'Something'}/>
                                        </Col>
                                        <Col span={22}>
                                            {newsList.heading}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={2}>{newsList.count}</Col>
                                        <Col span={22}>{newsList.detail}</Col>
                                    </Row>
                                    <Row>
                                        <Col span={22} offset={2}>
                                            {
                                                newsList.categories.map((data) => {
                                                    return <Tag key={data}>{data}</Tag>
                                                })
                                            }
                                        </Col>
                                    </Row>
                                </Row>
                            )
                        })
                    }
                </Row>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        news: state.activeNews
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchNews: (searchStr) => dispatch(searchNews(searchStr)) ,
        sortNews: (sort) => dispatch(sortNews(sort))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);