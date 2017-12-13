import update from 'immutability-helper';

const initialState = {
  payment: {},
  ticket: {},
  loading: false,
  success: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHECK_PAYMENT_STATUS_SUCCESS": {
      return update(state, {
        payment: {$set: action.payload},
        success: {$set: true},
        loading: {$set: false}
      });
    }

    case "CHECK_TICKET_STATUS_SUCCESS": {
      return update(state, {
        ticket: {$set: action.payload},
        success: {$set: true},
        loading: {$set: false}
      });
    }

    default: {
      return {...state}
    }

  }
};
