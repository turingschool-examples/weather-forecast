export const loadState = () => {
  try {
    const localStorageState = localStorage.getItem('state');
    if(!localStorageState) { return undefined; }
    return JSON.parse(localStorageState);
  } catch (error) {
    return undefined;
  }
}


export const saveState = (state) => {
  try {
    const localStorageState = JSON.stringify(state);
    localStorage.setItem('state', localStorageState)
  } catch (error) {
    console.log('shit')
  }
}
