import React, { Component } from 'react';

import axios from "axios";

class Api extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postData: [],
        }
    }


    componentDidMount() {
        const data = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        axios.get("https://aminsheibani.ir/api/products")
            .then(response => axios.post("https://jsonplaceholder.typicode.com/posts",data)
                .then(response => console.log(response)))
    }
    // postHandler = () => {
    //     axios.post("https://aminsheibani.ir/api/products", { name: text })
    //         .then(response => console.log(""))
    // }



    render() {
        return (
            <h1>
                {this.state.postData.map(data => <h1 key={data.id}>{data.price}</h1>)}
            </h1>
        );
    }
}

export default Api;