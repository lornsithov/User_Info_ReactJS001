import { Component } from "react";
export default class TableComponent extends Component{

    render() {
        return (
            <div>
                
                <table className="mt-10 border overflow-x-auto m-auto">
                
                    <thead>
                        <tr className="border">
                            <th className="px-6 py-3 border">Id</th>
                            <th className="px-6 py-3 border">Name</th>
                            <th className="px-6 py-3 border">Email</th>
                            <th className="px-6 py-3 border">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map((item)=>(
                        <tr className="border">
                            <td className="px-6 py-3 border">{item.id}</td>
                            <td className="px-6 py-3 border">{item.name}</td>
                            <td className="px-6 py-3 border">{item.email}</td>
                            <td className="px-6 py-3 border">{item.age}</td>
                        </tr>
                    ))}
                    </tbody>
                    
                </table>
                
            </div>
        )
    }
}