import React from 'react'
import {connect} from 'react-redux'
import CommentAdd from '@/components/redux/comment/comment-add/comment-add'
import CommentList from '@/components/redux/comment/comment-list/comment-list'
import {getComments} from '@/store/actions'
import {Row, Col} from 'antd'

class Comment extends React.Component {

    componentDidMount() {
        //模拟异步获取数据
        this.props.getComments()
    }

    render() {
        return (
            <Row>
                <Row>
                    <h1>请发表对React的评论</h1>
                </Row>
                <Row>
                    <Col span={12}>
                        <CommentAdd/>
                    </Col>
                    <Col span={12}>
                        <CommentList/>
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default connect(
    null,
    {getComments}
)(Comment)