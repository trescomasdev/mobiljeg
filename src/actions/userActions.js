import request from '../utils/request';
import { REMOTE_URL } from '../config/app';

export function authenticate(){
  return function(dispatch, getState){
    request.get(REMOTE_URL + "/data/auth/authenticate")
      .then((response) => {
        dispatch({type: "AUTHENTICATE_SUCCESS", payload: response.data})      
      })
      .catch((err) => {
        dispatch({type: "AUTHENTICATE_FAILED", payload: err})
    })
  }
}

export function register(data, success = false, failed = false){
  return function(dispatch, getState){
    request.post(REMOTE_URL + "/data/auth/register", data)
      .then((response) => {

        if (success !== false)
          dispatch({type: success, payload: response.data})

        dispatch({type: "REGISTRATION_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        if (failed !== false)
          dispatch({type: failed, payload: err.response})

        dispatch({type: "REGISTRATION_FAILED", payload: err.response.data})
    })
  }
}

export function login(data, success = false, failed = false){
  return function(dispatch, getState){
    request.post(REMOTE_URL + "/data/auth/login", data)
      .then((response) => {
        if (success !== false)
          dispatch({type: success, payload: response.data})

        dispatch({type: "LOGIN_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        if (failed !== false)
          dispatch({type: failed, payload: err.response.data})

        dispatch({type: "LOGIN_FAILED", payload: err.response.data})
    })
  }
}

export function logout(){
  return function(dispatch, getState){
    request.delete(REMOTE_URL + "/data/auth/logout")
      .then((response) => {
        dispatch({type: "LOGOUT_SUCCESS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "LOGOUT_FAILED", payload: err})
    })
  }
}
