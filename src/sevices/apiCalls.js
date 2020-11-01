/*************************************************************
 *
 * Purpose         : Define actions for various http methods
 *
 * @description    : Actions to be done when http methods are called.
 *
 *
 * @file           : apiCalls.js
 * @overview       : Actions of http methods
 * @module         : service
 * @version        : 1.0
 * @since          : 31/10/2020
 *
 * **********************************************************/

import userAccountServices from "./userAccountServices";

class apiCalls {
  /*
   * @description service to pass request to create new user
   * @params {signUpObject} data i.e. details of the user like name, email, password etc.
   */
  newUserSignUp = (signUpObject) => {
    return userAccountServices.userServicies(
      process.env.REACT_APP_SIGN_UP_API_PATH,
      signUpObject
    );
  };

  /*
   * @description service to pass request to log in user
   * @params {logInObject} data i.e. email and password of the user
   */
  userLogIn = (logInObject) => {
    return userAccountServices.userServicies(
      process.env.REACT_APP_LOG_IN_API_PATH,
      logInObject
    );
  };

  /*
   * @description service to send a link to reset account password for user
   * @params {forgotPasswordObject} data i.e. email of the user
   */
  sendResetLink = (forgotPasswordObject) => {
    return userAccountServices.userServicies(
      process.env.REACT_APP_RESET_API_PATH,
      forgotPasswordObject
    );
  };
}

export default new apiCalls();
