import React, { Component } from 'react'

export default class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            message: "UnLike",
            type: ""
        }
        this.changeMessage=this.changeMessage.bind(this)
        this.insertData=this.insertData.bind(this)
    }

    changeMessage() {
        this.setState({ message: "Like" })
    }

    insertData(){
        var item = "React"
        var myArray=this.state.data
        myArray.push(item)
        this.setState({data:myArray})
    }

    render() {
        return (
            <div>
                <button onClick={this.changeMessage} type="button" class="btn btn-primary">{this.state.message}</button>
                <h1>{this.state.data}</h1>
                <button onClick={this.insertData} type="button" class="btn btn-primary">Insert</button>
            </div>
        )
    }
}
