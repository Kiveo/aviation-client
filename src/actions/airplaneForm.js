import airplaneFormData from "../reducers/airplaneFormData";

// Action Creator
export const updateAirplaneFormData = airplaneFormData => {
  return {
    type: 'UPDATED_DATA',
    airplaneFormData
  }
}
