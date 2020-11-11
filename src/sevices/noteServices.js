/*************************************************************
 *
 * Purpose         : Define actions for various http methods which
 *                   take url path and object to do require task and
 *                   return responce or error
 *
 * @description    : Actions to be done when http methods are called.
 *
 * @file           : userAccountServices.js
 * @overview       : Actions of http methods
 * @module         : service
 * @version        : 1.0
 * @since          : 31/10/2020
 *
 * **********************************************************/

import axios from "axios";

class userAccountServices {

  getNoteDetails = (urlPath,object) => {
    return axios
      .get(urlPath,object)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };
}

export default new userAccountServices();
