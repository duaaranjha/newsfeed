import React from 'react';
import {Menu} from "antd";
import connect from "react-redux/es/connect/connect";
import {selectCategory} from "../Actions/action";

const {SubMenu} = Menu;

class Category extends React.Component {

    componentDidMount() {
        console.log('DidMount')
        this.props.selectCategory();
    }

    render() {
        return this.props.categories.map((data) => {
            return (
                <Menu key={data.name}
                      mode="vertical" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                    <SubMenu onTitleClick={() => {
                        this.props.selectCategory(data.value);
                    }} title={<div>
                        {/*<img src={`../images/${data.icon}.png`}/>*/}
                        <img style={{height:'13px', width:'13px'}} src={require(`../images/${data.icon}.png`)} />
                        <span> {data.name} </span>
                    </div>}/>
                </Menu>
            )
        })
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        selectCategory: (category) => dispatch(selectCategory(category))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Category);