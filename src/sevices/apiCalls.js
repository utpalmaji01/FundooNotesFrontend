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

  /*
   * @description service to reset account password for user
   * @params {resetPasswordObject} data i.e. new password of the user's account
   * @params {token} data i.e. sent from the backend for authorization
   */
  resetNewPassword = (resetPasswordObject, token) => {
    return userAccountServices.userServicies(
      process.env.REACT_APP_RESET_NEW_PASSWPRD_API_PATH + token,
      resetPasswordObject
    );
  };

  /*
   * @description service to log out for user
   * @params {token} data i.e. sent from the backend for authorization
   */
  userLogOut = (token) => {
    return userAccountServices.userServicies(
      process.env.REACT_APP_LOG_OUT_API_PATH + token
    );
  };

  /*
   * @description service to log out for user
   * @params {token} data i.e. sent from the backend for authorization
   */
  getAllNotes = (token) => {
    return userAccountServices.getAllNoteList(
      process.env.REACT_APP_GET_ALL_NOTES_API_PATH + token
    );
  };

  /*
   * @description service to log out for user
   * @params {token} data i.e. sent from the backend for authorization
   */
  addNewNote = (noteObject) => {
    return userAccountServices.userServicies(
      process.env.REACT_APP_GET_ALL_NOTES_API_PATH + localStorage.getItem("id"),
      noteObject
    );
  };
}

export default new apiCalls();
