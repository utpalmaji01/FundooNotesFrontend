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

  /* localStorage.getItem("id")
   * @description service to log out for user
   * @params {token} data i.e. sent from the backend for authorization
   */
  getAllNotes = () => {
    let header = {
      headers: {
        'Authorization' : localStorage.getItem("id")
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
  addNewNote = ( noteObject) => {
    let header = {
      headers: {
        'Authorization' : localStorage.getItem("id")
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
  getNote = ( noteId, noteIdObject) => {
    let header = {
      headers: {
        'Authorization' : localStorage.getItem("id")
      }
    };
    return axiosServices.getServices(
      process.env.REACT_APP_GET_NOTE_API_PATH + noteId + "?",
      noteIdObject,
      header
    );
  };

  /*
   * @description service to update a note
   * @params {token} data i.e. sent from the backend for authorization
   * @params {noteObject} data i.e. details of note
   */
  updateNote = (noteObject) => {
    let header = {
      headers: {
        'Authorization' : localStorage.getItem("id")
      }
    };
    return axiosServices.postServices(
      process.env.REACT_APP_UPDATE_NOTE_API_PATH,
      noteObject,
      header
    );
  };

  /*
   * @description service to color of a note
   * @params {token} data i.e. sent from the backend for authorization
   * @params {noteObject} data i.e. details of note
   */
  changeNoteColor = ( noteObject) => {
    let header = {
      headers: {
        'Authorization' : localStorage.getItem("id")
      }
    };
    return axiosServices.postServices(
      process.env.REACT_APP_CHANGE_NOTE_COLOR_API_PATH,
      noteObject,
      header
    );
  };

  /*
   * @description service to color of a note
   * @params {token} data i.e. sent from the backend for authorization
   * @params {noteObject} data i.e. details of note
   */
  changeNoteArchiveStatus = (noteObject) => {
    let header = {
      headers: {
        'Authorization' : localStorage.getItem("id")
      }
    };
    return axiosServices.postServices(
      process.env.REACT_APP_CHANGE_NOTE_ARCHIVE_STATUS_API_PATH,
      noteObject,
      header
    );
  };

  /*
   * @description service to delete a note
   * @params {token} data i.e. sent from the backend for authorization
   * @params {noteObject} data i.e. details of note
   */
  deleteNote = ( noteObject) => {
    let header = {
      headers: {
        'Authorization' : localStorage.getItem("id")
      }
    };
    return axiosServices.postServices(
      process.env.REACT_APP_DELETE_NOTE_API_PATH,
      noteObject,
      header
    );
  };

  /*
   * @description service to delete a note
   * @params {token} data i.e. sent from the backend for authorization
   * @params {noteObject} data i.e. details of note
   */
  deleteNoteForever = ( noteObject) => {
    let header = {
      headers: {
        'Authorization' : localStorage.getItem("id")
      }
    };
    return axiosServices.postServices(
      process.env.REACT_APP_DELETE_NOTE_FOREVER_API_PATH,
      noteObject,
      header
    );
  };
}

export default new noteServices();
