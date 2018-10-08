const initialState = {
  name: '',
  seats: 0,
  img_url: '',
  lesson_rate: 0,
  identifier: ''
}

const airplaneFormData = (state = initialState, action) => {
  
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.airplaneFormData;

    case 'RESET_AIRPLANE_FORM':
      return initialState;
      
    default: 
      return state; 
  }
} 

export default airplaneFormData

// note: syntax optional for export default vs export default airplaneFormData