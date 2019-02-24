export const change = (e) => {
  return {
    type: 'ADD_FORM',
    event: e,
  }
}
export const submit = (value) => {
  return {
    type: 'SUBMIT',
    event: value
  }
}