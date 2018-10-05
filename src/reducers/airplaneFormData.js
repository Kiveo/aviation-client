// syntax: export default () => {}
export default (state = {
  name: '',
  seats: 0,
  img_url: '',
  lesson_rate: 0,
  identifier: ''
}, action) => {
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.airplaneFormData;

    default: 
      return state; 
  }
} 