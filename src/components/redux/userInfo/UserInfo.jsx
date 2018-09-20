import React from 'react'
import AddUser from '@/components/redux/userInfo/AddUser'
import UserList from '@/components/redux/userInfo/UserList'
import {Row} from 'antd'
import {getComments} from '@/store/actions'

export default class UserInfo extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Row style={{padding:'20px 0'}}>
                    <AddUser/>
                </Row>
                <Row>
                    <UserList/>
                </Row>
            </div>
        )
    }
}