import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from "./userReducer";
import buyTicketForm from "./forms/buyTicketFormReducer";
import loginForm from "./forms/loginFormReducer";
import registerForm from "./forms/registerFormReducer";
import tickets from "./ticketsReducer";
import payment from "./paymentReducer";
import options from "./optionsReducer";

export default combineReducers({
  user: user,
  options: options,
  tickets: tickets,
  payment: payment,
  loginForm: loginForm,
  registerForm: registerForm,
  buyTicketForm: buyTicketForm,
  routing: routerReducer
});
