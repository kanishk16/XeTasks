import React, { Component } from "react";

export default class ApiCall extends Component{
    constructor(props){
        super(props);
        this.state ={
            status: false
        }
    }

    componentDidMount(){
        this.fetchURL();
    }

    fetchURL(){
        fetch("https://jsonplaceholder.typicode.com/posts?userId=2").then(response=>{
                
                
                this.setState({
                    status: true,
                });
                return response.json();
            })
            .then(function(myJson){
                console.log(JSON.stringify(myJson));
            });
    }
    
    render() {
        return(
            <div className="apidetails">
            { this.state.status ? (
                <div>URL Fetch Complete</div>
            ):(
                <div>Check for ERRORS while FETCH!!</div>
            )}
            </div>
        );
    }   
}