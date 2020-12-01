/*************************************************************
 *
 * Purpose         : Define actions for various http methods which
 *                   take url path and object to do require task and
 *                   return responce or error
 *
 * @description    : Actions to be done when http methods are called.
 *
 * @file           : axiosServices.js
 * @overview       : Actions of http methods
 * @module         : service
 * @version        : 1.0
 * @since          : 31/10/2020
 *
 * **********************************************************/

import axios from "axios";

class axiosServices {
  getServices = (urlPath, token) => {
    console.log("reach get service");
    return axios
      .get(urlPath, {
        headers: {
          'Authorization' : token
        }
      });
  };

  postServices = (urlPath, object, token) => {
    console.log("reach post service");
    return axios
      .post(urlPath, object, {
        headers: {
          'Authorization' : token,
        }
      });
  };
}

export default new axiosServices();
