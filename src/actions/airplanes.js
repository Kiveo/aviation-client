import { resetAirplaneForm } from './airplaneForm';

const API_URL = process.env.REACT_APP_API_URL

// Error handler for fetch calls
const handleErrors = (response) => {
  if (!response.ok) {
    console.log("Error encountered with Response...")
    // setRequestFlagColor("orange")
  }
  return response;
}

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

const editAirplane = airplane => {
  return {
    type: 'EDIT_AIRPLANE',
    airplane
  }
}

const deactivateLoader = () => {
  return {
    type: 'DEACTIVATE_LOADER',
  }
}

const activateLoader = () => {
  return {
    type: 'ACTIVATE_LOADER'
  }
}

// async actions
export const initializeLoader = () => {
  return dispatch => {
    dispatch(activateLoader() )
  }
}

export const getAirplanes = () => {
  return dispatch => {
    return fetch(`${API_URL}/airplanes`)
    .then(response => response.json() )
    .then(airplanes => dispatch(setAirplanes(airplanes) ) )
    .then(dispatch(deactivateLoader()) )
    .catch(error => dispatch(activateLoader()) );
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
    .then(handleErrors)
    .then(response => response.json() )
    .then(airplane => {
      dispatch(addAirplane(airplane))
      dispatch(resetAirplaneForm() ) 
    })
    .catch(error => {
      console.log(error)
    } )
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

export const updateAirplane = (airplane) => {
  let airplane_id = airplane.id
  return dispatch => {
    return fetch(`${API_URL}airplanes/${airplane_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      // API uses strong parameters airplane: airplaneParams expected
      body: JSON.stringify({airplane: airplane})
    })
    .then(response => response.json() )
    .then(airplane => {
      dispatch(editAirplane(airplane))
      dispatch(resetAirplaneForm() ) 
      dispatch(getAirplanes() )
    })
    .catch(error => {
      console.log(error)
    } )
  }
}