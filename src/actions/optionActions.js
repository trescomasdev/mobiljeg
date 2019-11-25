import request from '../utils/request'
import { REMOTE_URL } from '../config'

export function getOptions(e){
  return function(dispatch, getState){
      dispatch({type: "FETCHING_OPTIONS_STARTED"})
      request.get(REMOTE_URL + "/data/option/all")
        .then((response) => {
          dispatch({type: "FETCHING_OPTIONS_SUCCESS", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "FETCHING_OPTIONS_FAILED", payload: err.data})
      })
  }
}

export function updateOption(e){
  return function(dispatch, getState){
      dispatch({type: "UPDATE_OPTION_STARTED"})
      request.post(REMOTE_URL + "/data/option/", {key: e.key, value: e.value})
        .then((response) => {
          dispatch({type: "UPDATE_OPTION_SUCCESS", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "UPDATE_OPTION_FAILED", payload: err.data})
      })
  }
}

export function deleteOption(e){
  return function(dispatch, getState){
      dispatch({type: "DELETE_OPTION_STARTED"})
      request.delete(REMOTE_URL + "/data/option/?id=" + e._id)
        .then((response) => {
          dispatch({type: "DELETE_OPTION_SUCCESS", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "DELETE_OPTION_FAILED", payload: err.data})
      })
  }
}

export function addNewOption(e){
  return function(dispatch, getState){
      dispatch({type: "ADD_NEW_OPTION", payload: e})
  }
}

export function changeOption(e){
  return function(dispatch, getState){
      dispatch({type: "CHANGE_OPTION", payload: e})
  }
}
