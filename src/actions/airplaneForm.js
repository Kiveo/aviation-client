// Action Creator
const updateAirplaneFormData = airplaneFormData => {
  return {
    type: 'UPDATED_DATA', 
    airplaneFormData
  }
}

export default updateAirplaneFormData;
