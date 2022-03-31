const REMOVE_MESSAGE = 'remove-message';
const ADD_MESSAGE = 'add-message';
const UPDATE_STATUS = 'update-status';

const switcher = {
  [REMOVE_MESSAGE]: (state, { payload }) => {
    return {
      ...state,
      messages: state.messages.filter(
        message => message.id !== payload
      ),
    }
  },
  [ADD_MESSAGE]: (state, { payload }) => {
    return {
      ...state,
      messages: state.messages.concat(payload)
    }
  },
  [UPDATE_STATUS]: (state, { payload }) => {
    return {
      ...state,
      messages: state.messages.map(message => {
        if (message.id === payload.id) {
          return {
            ...message,
            status: payload.status,
          };
        }
        return message;
      })
    }
  },
  DEFAULT: () => {
    throw new Error('Unknown action type')
  }
};

const reducer = (state, action) => {
  return switcher[action.type](state, action) || switcher.DEFAULT();
}

export { 
  reducer,
  REMOVE_MESSAGE,
  ADD_MESSAGE,
  UPDATE_STATUS
};