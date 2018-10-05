const API_URL = process.env.REACT_APP_API_URL

const getAirplanes = () => (
  dispatch => {
    return fetch(`${API_URL}/airplanes`)
      .then(response => response.json() )
  }
)

  // .then(airplanes => this.setState({ airplanes, loading: false }) )

export default getAirplanes;