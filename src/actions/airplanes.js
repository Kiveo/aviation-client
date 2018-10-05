const API_URL = process.env.REACT_APP_API_URL

// action creators
const setAirplanes = airplanes => {
  return {
    type: 'GET_AIRPLANES_SUCCESS',
    airplanes 
  }
}

// async action
export const getAirplanes = () => {
  return dispatch => {
    return fetch(`${API_URL}/airplanes`)
    .then(response => response.json() )
    .then(airplanes => dispatch(setAirplanes) )
    .catch(error => console.log(error));
  }
}


// export default getAirplanes;