import validator from 'validator';

import {isEmptyObject} from './validations';

export default function validateInput(value, validation, active = false, inputs = {}){
  let error = "";

  value = String(value)

  if (validation){
    if (validation.required || (active && !validator.isEmpty(value))){
      if (value === ""){
        error += "A mező kitöltése kötelező! "
      }

      if (validation.type === "email" && !validator.isEmail(value)){
        error += "Hibás email formátum! "
      }

      if (validation.type === "number" && !validator.isNumeric(value)){
        error += "Csak szám adható meg! "
      }

      if (validation.min && validation.min > value){
        error += "Minumum 1 "
      }

      if (validation.type === "phone" && !validator.isMobilePhone(value, validation.locale)){
        error += "Hibás telefonszám formátum! "
      }

      if (validation.equals && !isEmptyObject(inputs)){
        if (inputs[validation.equals] !== value){
          error += "Nem egyezik meg a következő mezővel: " + validation.equals
        }
      }
    }
  }

  if (error === "")
    error = false

  return {error: error, value: value};
}
