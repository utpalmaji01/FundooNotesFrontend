/*************************************************************
 *
 * Purpose         : Define actions for various http methods
 *
 * @description    : Actions to be done when http methods are called.
 *
 *
 * @file           : noteServices.js
 * @overview       : Actions of http methods
 * @module         : service
 * @version        : 1.0
 * @since          : 31/10/2020
 *
 * **********************************************************/

import axiosServices from "./axiosServices";

class noteServices {
  /********************************* Note Services *********************************/

  /*
   * @description service to log out for user
   * @params {token} data i.e. sent from the backend for authorization
   */
  getAllNotes = (token) => {
    let header = {
      headers: {
        'Authorization' : token
      }
    };
    return axiosServices.getServices(
      process.env.REACT_APP_GET_ALL_NOTES_API_PATH,
      header
    );
  };

  /*
   * @description service to log out for user
   * @params {token} data i.e. sent from the backend for authorization
   * @params {noteObject} data i.e. details of note
   */
  addNewNote = (token, noteObject) => {
    let header = {
      headers: {
        'Authorization' : token
      }
    };
    return axiosServices.postServices(
      process.env.REACT_APP_ADD_NEW_NOTE_API_PATH,
      noteObject,
      header
    );
  };

  /*
   * @description service to log out for user
   * @params {token} data i.e. sent from the backend for authorization
   */
  getNote = (token, noteId, noteIdObject) => {
    let header = {
      headers: {
        'Authorization' : token
      }
    };
    return axiosServices.getServices(
      process.env.REACT_APP_GET_NOTE_API_PATH + noteId + "?",
      noteIdObject,
      header
    );
  };
}

export default new noteServices();
