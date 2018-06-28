import React from 'react'

export default class Grid extends React.Component {

    constructor(props) {
        super();
        this.state = {
            list: [{id: 1, name: 'name1', age: 20}, {id: 2, name: 'name2', age: 30}]
        }
    }

    render() {
        return <div>
            <table className='ant-table-content'>
                <tbody className='ant-table-tbody'>
                <tr>
                    <td>姓名</td>
                    <td>年龄</td>
                </tr>
                {
                    this.state.list.map((post, index) => {
                            return <tr key={index}>
                                <td>{post.name}</td>
                                <td>{post.age}</td>
                            </tr>
                        }
                    )
                }
                </tbody>
            </table>
        </div>
    }
}
