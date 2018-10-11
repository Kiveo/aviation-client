const airplanesReducer = (state = [], action ) => {
  switch(action.type) {
    case 'GET_AIRPLANES_SUCCESS':
      return action.airplanes;

    case 'CREATE_AIRPLANE':
      return state.concat(action.airplane);

    case 'RESET_AIRPLANE_FORM':
      return state;

    case 'REMOVE_AIRPLANE':
      let newAirplanes = this.state.airplanes.filter(airplane => {
        return airplane.id !== action.airplane.id
      })
      return {...state, airplanes: newAirplanes}
      
    default: 
      return state; 
  }
}

export default airplanesReducer;