export const addWordToStore = (word) => {
  const action = {
    type: 'ADD_WORD',
    data: {
      word: word,
      isLearned: false,
    },
  };
  return action;
}

export const markWordAsLearned = (word) => {
  const action = {
    type: 'MARK_WORD_AS_LEARNED',
    data: {
      word: word,
    },
  };
  return action;
}

export const markWordAsNeedToLearn = (word) => {
  const action = {
    type: 'MARK_WORD_AS_NEED_TO_LEARN',
    data: {
      word: word,
    },
  };
  return action;
}
