import { resetAirplaneForm } from './airplaneForm';

const API_URL = process.env.REACT_APP_API_URL

// action creator
const setAirplanes = airplanes => {
  return {
    type: 'GET_AIRPLANES_SUCCESS',
    airplanes
  }
}

const addAirplane = airplane => {
  return {
    type: 'CREATE_AIRPLANE',
    airplane
  }
}

const removeAirplane = airplane => {
  return {
    type: 'REMOVE_AIRPLANE',
    airplane
  }
}

// async actions
export const getAirplanes = () => {
  return dispatch => {
    return fetch(`${API_URL}/airplanes`)
    .then(response => response.json() )
    .then(airplanes => dispatch(setAirplanes(airplanes) ) )
    .catch(error => console.log(error));
  }
}

export const createAirplane = (airplane) => {
  return dispatch => {
    return fetch(`${API_URL}/airplanes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // API uses strong parameters airplane: airplaneParams expected
      body: JSON.stringify({airplane: airplane})
    })
    .then(response => response.json() )
    .then(airplane => {
      dispatch(addAirplane(airplane)) 
      dispatch(resetAirplaneForm())
    })
    .catch(error => console.log(error) )
  }
}

export const deleteAirplane = (airplane) => {
  return dispatch => {
    return fetch(`${API_URL}/airplanes/${airplane.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(dispatch(removeAirplane(airplane) )
    )
    .catch(error => console.log(error) )
  }
}
