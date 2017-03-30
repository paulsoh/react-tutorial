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

  if (action.type === 'MARK_WORD_AS_LEARNED') {
    const word = action.data.word;

    const oldVocabList = [
      ...state.vocabList,
    ];

    const newVocabList = oldVocabList.map((vocab) => {
      if (vocab.word === word) {
        return {
          word: word,
          isLearned: true,
        }
      } else {
        return vocab;
      }
    });

    return {
      ...state,
      vocabList: newVocabList,
    }
  }

  if (action.type === 'MARK_WORD_AS_NEED_TO_LEARN') {
    const word = action.data.word;

    const oldVocabList = [
      ...state.vocabList,
    ];

    const newVocabList = oldVocabList.map((vocab) => {
      if (vocab.word === word) {
        return {
          word: word,
          isLearned: false,
        }
      } else {
        return vocab;
      }
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
