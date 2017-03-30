const initialState = {
  vocabList: [
    {
      word: 'prevaricate',
      isLearned: true,
    },
    {
      word: 'hackneyed',
      isLearned: false,
    },
    {
      word: 'diffident',
      isLearned: false,
    },
    {
      word: 'plucky',
      isLearned: false,
    },
  ],
}

const reducer = (state = initialState, action) => {
  return {
    ...state,
  }
}

export default reducer;
