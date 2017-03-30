export const addWordToStore = (word) => {
  const action = {
    type: 'ADD_WORD',
    data: word,
  };
  return action;
}
