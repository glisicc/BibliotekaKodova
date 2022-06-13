import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
    }; //in class based components state are always named state and type of object
  }

  toggleUsersHandler() {
    // this.state.showUsers = true//NOT !
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    }); //Always get object and merge behinde the scenes this state iwth previous
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
