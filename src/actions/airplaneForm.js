// Action Creator
const updateAirplaneFormData = airplaneFormData => {
  return {
    type: 'UPDATED_DATA', 
    airplaneFormData
  }
}

export const resetAirplaneForm = () => {
  return {
    type: 'RESET_AIRPLANE_FORM',
  }
}

export default updateAirplaneFormData;
