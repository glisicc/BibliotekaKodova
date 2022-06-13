import { Fragment, useState, useEffect, Component } from "react";
import UsersContext from "../store/users-context";

import Users from "./Users";

class UserFinder extends Component {
  static contextType = UsersContext; //in class based comp wu can use only one context on this way
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }
  componentDidMount() {
    //send http request...
    this.setState({ filteredUsers: this.context.users });
  }
  //with class based components we need to think abouth when somethings hapen in compon life cyclus, and prevent unnesesary updates
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <UsersContext.Consumer>
          <Users users={this.state.filteredUsers} />
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </UsersContext.Consumer>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");
//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <input type="search" onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
