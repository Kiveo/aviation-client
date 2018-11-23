const initialState = {
  name: '',
  seats: 0,
  img_url: '',
  lesson_rate: 0,
  identifier: '',

  // flag: "green",
}

const airplaneFormData = (state = initialState, action) => {
  
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.airplaneFormData;

    case 'RESET_AIRPLANE_FORM':
      return initialState;
    
    // case 'SET_FLAG_COLOR':
    //   return {...initialState, flag: "orange"}
      
    default: 
      return state; 
  }
} 

export default airplaneFormData
