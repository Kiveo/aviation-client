const airplanesReducer = (state = [], action ) => {
  switch(action.type) {
    case 'GET_AIRPLANES_SUCCESS':
      return action.airplanes;

    case 'CREATE_AIRPLANE':
      return state.concat(action.airplane);

    case 'RESET_AIRPLANE_FORM':
      return state;

    default: 
      return state; 
  }
}

export default airplanesReducer;