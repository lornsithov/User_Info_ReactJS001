import { Component } from "react"
import TableComponent from "./TableComponent";

export default class FormComponent extends Component {
    constructor() {
        super();
        this.state = {
            person: [
                {id: 1, name: 'John', email: 'john@example.com', age: 20},
            ]
        }
    }
    
    render() {
        return(
            <div className="container m-auto ">
                <div className="w-1/2 m-auto flex flex-col">
                    <h1 className=" text-center">User Information</h1>
                    <h1>Name</h1>
                    <input type="text" className="border-1 bg-gray-400 rounded-md" />
                    <h1>Email</h1>
                    <input type="text" className="border-1 bg-gray-400 rounded-md" />
                    <h1>Age</h1>
                    <input type="text" className="border-1 bg-gray-400 rounded-md" />
                    <TableComponent data={this.state.person}/>
                </div>
            </div>
        )
    }
}