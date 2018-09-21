import React from 'react'
import {Table, Row, Col} from 'antd'
import {connect} from 'react-redux'

class UserList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let columns = [{title: "名称", dataIndex: "username", align: "center"},
            {title: "年龄", dataIndex: "age", align: "center"}
        ];
        return (
            <Row>
                <Col offset={2} span={18}>
                    <Table bordered={true} rowKey={record => record.created}
                           dataSource={this.props.userList} columns={columns}/>
                </Col>
            </Row>
        )
    }
}

export default connect(
    state => ({userList: state.userList})
)(UserList)