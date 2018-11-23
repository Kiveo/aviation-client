// Action Creator
export const updateAirplaneFormData = airplaneFormData => {
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

// export const setRequestFlagColor = (color) => {
//   return {
//     type: 'SET_FLAG_COLOR',
//     flag: color
//   }
}

