import update from 'immutability-helper';

const initialState = {
  options: [],
  loading: false,
  success: false,
  failed: false,
  error: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_OPTION": {
      let updated = state.options.findIndex((elem) => elem.key === action.payload.target.name)

      return update(state, {
        options: {[updated]: { value: {$set: action.payload.target.value}, edited: {$set: true}}}
      });
    }

    case "ADD_NEW_OPTION": {
      return update(state, {
        options: {$push: [{key: action.payload.value}]}
      });
    }

    case "FETCHING_OPTIONS_STARTED": {
      return update(state, {
        loading: {$set: true}
      });
    }

    case "FETCHING_OPTIONS_SUCCESS": {
      return update(state, {
        options: {$set: action.payload},
        success: {$set: true},
        loading: {$set: false}
      });
    }

    case "FETCHING_OPTIONS_FAILED": {
      return update(state, {
        error: {$set: action.payload},
        failed: {$set: true},
        loading: {$set: false}
      });
    }

    case "UPDATE_OPTION_STARTED": {
      return update(state, {
        loading: {$set: true}
      });
    }

    case "UPDATE_OPTION_SUCCESS": {
      let updated = state.options.findIndex((elem) => elem.key === action.payload.key)

      return update(state, {
        options: {[updated]: {$set: action.payload}},
        success: {$set: true},
        loading: {$set: false}
      });
    }

    case "UPDATE_OPTION_FAILED": {
      return update(state, {
        error: {$set: action.payload},
        failed: {$set: true},
        loading: {$set: false}
      });
    }

    case "DELETE_OPTION_STARTED": {
      return update(state, {
        loading: {$set: true}
      });
    }

    case "DELETE_OPTION_SUCCESS": {
      let updated = state.options.findIndex((elem) => elem._id === action.payload)

      return update(state, {
        options: {$unset: [updated]},
        success: {$set: true},
        loading: {$set: false}
      });
    }

    case "DELETE_OPTION_FAILED": {
      return update(state, {
        error: {$set: action.payload},
        failed: {$set: true},
        loading: {$set: false}
      });
    }

    default: {
      return {...state}
    }

  }
};
