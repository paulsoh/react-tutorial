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
  if (action.type === 'ADD_WORD') {

    const newVocabList = [
      ...state.vocabList,
    ];

    newVocabList.push({
      word: action.data.word,
      isLearned: action.data.isLearned,
    });

    return {
      ...state,
      vocabList: newVocabList,
    }
  }

  return {
    ...state,
  }
}

export default reducer;
