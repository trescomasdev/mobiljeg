import {login} from '../userActions';
import validateInput from '../../utils/validateInput';
import { isEmptyObject } from '../../utils/validations';

const actionPrefix = "LOGIN_FORM_";
const formID = "loginForm";

export function changeInput(e, validation){
  return function(dispatch, getState){
      let validatedInput = validateInput(e.value, validation[e.name]);

      dispatch({type: actionPrefix + "INPUT_CHANGE", payload: {name: e.name, value: validatedInput.value}})

      dispatch(validate(validation, e.name))
  }
}

export function validate(validation, activeKey = ""){
  return function(dispatch, getState){
      let formData = getState()[formID].inputs

      let error = {};

      for (const key of Object.keys(validation)) {
        let active = activeKey === key ? true : false;

        let validatedInput = validateInput(formData[key], validation[key], active);

        if (validatedInput.error !== false)
          error[key] = validatedInput.error;
      }

      if (isEmptyObject(error)){
        dispatch({type: actionPrefix + "VALIDATION_PASSED", payload: {error: error}})
      } else {
        dispatch({type: actionPrefix + "VALIDATION_FAILED", payload: {error: error}})
      }
  }
}

export function submit(validation){
  return function(dispatch, getState){
    let validated = getState()[formID].validated;

    dispatch({type: actionPrefix + "SUBMISSION_STARTED"})

    if (validated){
      dispatch(login(getState()[formID].inputs, actionPrefix + "SUBMISSION_SUCCESS", actionPrefix + "SUBMISSION_FAILED"))
    }
  }
}
