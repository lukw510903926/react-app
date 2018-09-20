import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CommentItem from '../comment-item/comment-item'


class CommentList extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidUpdate(){
        console.info('CommentList : ',this.props)
    }

    render() {
        let comments = this.props.comments;
        let display = comments.length > 0 ? 'none' : 'block';
        return (
            <div className="col-md-11">
                <h5 className="reply">评论回复：</h5>
                <h2 style={{display: display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment, index) => {
                            return <CommentItem comment={comment} key={index} index={index}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
}

export default connect(
    state => ({comments: state.comments})
)(CommentList)