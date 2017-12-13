import update from 'immutability-helper';

const initialState = {
  user: {},
  isAuthenticated: false,
  role: false,
  error: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case "LOGIN_SUCCESS": {
      return update(state, {
        isAuthenticated: {$set:true},
        role: {$set:action.payload.role},
        user: {$set: action.payload}
      });
    }

    case "LOGIN_FAILED": {
      return update(state, {
        isAuthenticated: {$set: false},
        error: {$set: action.payload.error}
      });
    }

    case "LOGOUT_SUCCESS": {
      return update(state, {
        isAuthenticated: {$set:false},
        $unset: ["user"]
      });
    }

    case "LOGOUT_FAILED": {
      return update(state, {
        error: {$set: action.payload.error}
      });
    }

    case "REGISTRATION_SUCCESS": {
      return update(state, {
        isAuthenticated: {$set:true},
        user: {$set: action.payload}
      });
    }

    case "REGISTRATION_FAILED": {
      return update(state, {
        isAuthenticated: {$set: false},
        error: {$set: action.payload.error}
      });
    }

    case "AUTHENTICATE_SUCCESS": {
      return update(state, {
        isAuthenticated: {$set: true},
        role: {$set: action.payload.role},
        user: {$set: action.payload}
      });
    }

    case "AUTHENTICATE_FAILED": {
      return update(state, {
        isAuthenticated: {$set: false},
        error: {$set: action.payload.error}
      });
    }

    default: {
      return {...state}
    }

  }
};
