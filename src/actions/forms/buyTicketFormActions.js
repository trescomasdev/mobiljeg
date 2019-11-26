import { barionPay } from "../ticketActions";
import validateInput from '../../utils/validateInput';
import { isEmptyObject } from '../../utils/validations';

const actionPrefix = "BUY_TICKET_FORM_";
const formID = "buyTicketForm";

export function changeInput(e, validation){
  return function(dispatch, getState){
      let validatedInput = validateInput(e.value, validation[e.name]);

      dispatch({type: actionPrefix + "INPUT_CHANGE", payload: {name: e.name, value: validatedInput.value}})

      if (e.name === "qty") dispatch({type: actionPrefix + "INPUT_CHANGE", payload: {name: "summary", value: validatedInput.value * 700}})

      dispatch(validate(validation, e.name))
  }
}

export function updateFromUser(e){
  return function(dispatch, getState){
      let user = getState().user.user || {}

      dispatch({type: actionPrefix + "INPUT_CHANGE", payload: {name: "name", value: user.name || ""}})
      dispatch({type: actionPrefix + "INPUT_CHANGE", payload: {name: "email", value: user.email || ""}})
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

    if (validated){
      dispatch({type: actionPrefix + "SUBMISSION_STARTED"})
      dispatch(barionPay())
    }
  }
}

export function renewSession(e){
  return function(dispatch, getState){
      dispatch({type: actionPrefix + "RENEW_SESSION"})
  }
}
