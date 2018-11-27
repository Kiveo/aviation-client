const initialState = {
  loading: 'true',
}

const loader = (state = initialState, action) => {
  
  switch(action.type) {
    case 'ACTIVATE_LOADER':
    return initialState;

    case 'DEACTIVATE_LOADER':
      return {...state, loading: false};

    default: 
      return state; 
  }
} 

export default loader;
