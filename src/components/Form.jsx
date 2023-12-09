import React, { Component } from "react";
import Table from "./Table";
import Swal from "sweetalert2";

export class form extends Component {
  constructor() {
    super();
    this.state = {
      user: [
        {
          id: 1,
          email: "rady@gmail.com",
          username: "Rady",
          age: 20,
          status: "Pending",
        },
        {
          id: 2,
          email: "sophat@gmail.com",
          username: "Sophat",
          age: 19,
          status: "Pending",
        },
        {
          id: 3,
          email: "sak@gmail.com",
          username: "Sak",
          age: 19,
          status: "Pending",
        },
      ],
      newEmail: "Null",
      newUsername: "Null",
      newAge: "Null",
      status: "Pending",
    };
  }

  // get value from user input
  handleChangeEmail = (event) => {
    this.setState({
      newEmail: event.target.value,
    });
  };
  handleChangeUsername = (event) => {
    this.setState({
      newUsername: event.target.value,
    });
  };
  handleChangeAge = (event) => {
    this.setState({
      newAge: event.target.value,
    });
  };

  // add new object into the array
  handleSubmit = () => {
    const newObj = {
      id: this.state.user.length + 1,
      email: this.state.newEmail,
      username: this.state.newUsername,
      age: this.state.newAge,
      status: this.state.status,
    };
    this.setState(
      {
        user: [...this.state.user, newObj],
        newEmail: "Null",
        newUsername: "Null",
        newAge: "Null",
      },
      () => console.log(this.state.user)
    );
  };

  //handleChangePending
  handleChangePending = (event) => {
    const user = this.state.user;
    user.map((user) => {
      if (user.id === event) {
        user.status = user.status === "Pending" ? "Done" : "Pending";
      }
    });
    this.setState({ user });
  };

  handleAlertShowMore = (user) => {
    Swal.fire({
      title: `ID: ${user.id} \n Email: ${user.email} \n Username: ${user.username} \n Age: ${user.age}`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }


  render() {
    return (
      <div className="App h-screen pt-16">
        <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-5xl ">
          Please fill your <span className="text-black">information</span>
        </h1>

        
        <div className="flex flex-col justify-center items-center w-full my-8">
          {/* email */}
          <div className="w-4/6">
            <label
              for="input-group-1"
              class="mb-2 text-xl font-medium text-gray-900 flex justify-start"
            >
              Email
            </label>
            <div class="relative mb-6">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                onChange={this.handleChangeEmail}
                type="text"
                id="email-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                placeholder="name@gmail.com"
              />
            </div>
          </div>

          {/* username */}
          <div className="w-4/6">
            <label
              for="input-group-1"
              class="mb-2 text-xl font-medium text-gray-900 flex justify-start"
            >
              Username
            </label>
            <div class="relative mb-6 flex">
              <span class="inline-flex items-center px-3 text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md text-lg">
                @
              </span>
              <input
                onChange={this.handleChangeUsername}
                type="text"
                id="username-input"
                class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                placeholder="lornsithov"
              />
            </div>
          </div>

          {/* age */}
          <div className="w-4/6">
            <label
              for="input-group-1"
              class="mb-2 text-xl font-medium text-gray-900 flex justify-start"
            >
              Username
            </label>
            <div class="relative mb-6 flex">
              <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                ❤️
              </span>
              <input
                onChange={this.handleChangeAge}
                type="text"
                id="age-input"
                class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                placeholder="Age"
              />
            </div>
          </div>

          {/* btn register */}
          <button
            onClick={this.handleSubmit}
            className="w-1/6 h-10  hover:border-blue-500  hover:bg-blue-500  hover:text-white rounded-lg mt-8 bg-white text-black border-blue-500 border-2"
          >
            Register
          </button>
        </div>

        <Table item={this.state.user} getChange={this.handleChangePending} getAlert={this.handleAlertShowMore}/>
      </div>
    );
  }
}

export default form;
