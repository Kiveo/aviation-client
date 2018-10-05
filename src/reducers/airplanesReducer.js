const airplanesReducer = (state = [], action ) => {
  switch(action.type) {
    case 'GET_AIRPLANES_SUCCESS':
      return action.airplanes;

    default: 
      return state; 
  }
}

export default airplanesReducer;