import React, { Component } from 'react';

export default class Table extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="App bg-red-200 pb-16">
                {/* table table */}
                <div className="relative overflow-x-auto w-4/6 m-auto ">
                    <table className="w-full text-sm text-center">
                        <thead className="text-md uppercase bg-transparent">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Age
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.item.map((items) => (
                                <tr key={items.id} className=" odd:bg-slate-100 even:bg-white">
                                    <td class="px-6 py-4">
                                        {items.id}
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {items.email}
                                    </th>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {items.username}
                                    </th>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {items.age}
                                    </th>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        <button onClick={()=>{this.props.getChange(items.id)}} className={`${(items.status === "Pending")? 'bg-red-600':'bg-green-800'} text-white w-40 h-8 rounded mr-4`}>{items.status}</button>  
                                        <button onClick={()=>{this.props.getAlert(items)}} className='text-white bg-blue-600 w-40 h-8 rounded'>Show More</button>
                                    </th>
                                </tr>
                            ))}           
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }        

}