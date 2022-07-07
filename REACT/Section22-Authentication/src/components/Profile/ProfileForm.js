import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-content";

import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const subminHandler = (event) => {
    event.preventDefault();

    const enterNewPassword = newPasswordInputRef.current.value;

    //add validation

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAXkIfFvjVKu6Uhkz_1TKAFM1vjfpEueT8",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enterNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      //assumption: always succeds
      history.replace("/");
    });
  };
  return (
    <form className={classes.form} onSubmit={subminHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          minLength={7}
          type="password"
          id="new-password"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
