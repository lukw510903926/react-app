import React from 'react'
import ReduxComponent from './ReduxComponent'
import ReduxBrother from './ReduxBrother'
import {Row, Col} from 'antd'
import store from '@/store/store'

export default class ReduxIndex extends React.Component {

    constructor(props) {
        super(props)
        console.info(store)
        store.dispatch({type:'redux'})
        console.info('ReduxIndex props : ',this.props)
    }

    render() {
        return (
            <div>
                <Row style={{marginTop: '20px'}}>
                    <ReduxComponent/>
                </Row>
                <Row>
                    <Col offset={8} span={8} style={{backgroundColor: 'blue', height: '10px'}}/>
                </Row>
                <Row>
                    <ReduxBrother/>
                </Row>
            </div>
        )
    }
}