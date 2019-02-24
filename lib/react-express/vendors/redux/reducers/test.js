const initialState = {
  title: 'React-Express Test Page !!',
  subtitle: 'State management using Redux.',
  formtitle: 'Test Form',
  value: '',
  revalue: ''
}

export const testReducer = (state = initialState, action) => {
  let stateCopy = Object.assign({}, state);

  switch (action.type) {
    case 'ADD_FORM':
      stateCopy.value = action.event;
      return stateCopy;
    case 'SUBMIT':
      stateCopy.revalue = action.event;
      return stateCopy;

    default:
      return stateCopy;
  }
}