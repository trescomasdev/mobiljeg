import update from 'immutability-helper';

const actionPrefix = "BUY_TICKET_FORM_";

const initialState = {
  inputs: {
    name: "",
    email: "",
    phone: "",
    qty: "0",
    summary: 0

  },
  validated: false,
  loading: false,
  success: false,
  failed: false,
  error: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case actionPrefix + "INPUT_CHANGE": {
      return update(state, {
        inputs: {[action.payload.name]: {$set: action.payload.value}}
      });
    }

    case actionPrefix + "VALIDATION_PASSED": {
      return update(state, {
        validated: {$set: true},
        error: {$set: action.payload.error}
      });
    }

    case actionPrefix + "VALIDATION_FAILED": {
      return update(state, {
        validated: {$set: false},
        error: {$set: action.payload.error}
      });
    }

    case actionPrefix + "SUBMISSION_STARTED": {
      return update(state, {
        loading: {$set: true}
      });
    }

    case actionPrefix + "SUBMISSION_SUCCESS": {
      return update(state, {
        loading: {$set: false},
        success: {$set: true},
        inputs: {$set: action.payload}
      });
    }

    case actionPrefix + "SUBMISSION_FAILED": {
      return update(state, {
        loading: {$set: false},
        failed: {$set: true}
      });
    }

    case actionPrefix + "RENEW_SESSION": {
      return initialState;
    }

    default: {
      return {...state}
    }

  }
};
