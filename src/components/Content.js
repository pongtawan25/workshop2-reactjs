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

    onChange(event){
        this.setState({type:event.target.value})
    }

    render() {
        return (
            <div>
                <br/><br/>
                <button onClick={this.changeMessage} type="button" class="btn btn-primary">{this.state.message}</button>
                <h1>{this.state.data}</h1>
                <button onClick={this.insertData} type="button" class="btn btn-primary">Insert</button>
                <br/><br/>
                <input type="text" onChange={this.onChange.bind(this)}/>
                <h1>{this.state.type}</h1>
                <br/><a href="/"><button class="btn btn-outline-success">back</button></a>
            </div>
        )
    }
}
