import { PhoneWordsActionTypes } from './types'

const INITIAL_STATE = {
  wordsData: null,
  isFetching: true,
  errorMessage: undefined
}

export const phoneWordsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PhoneWordsActionTypes.FETCH_PHONEWORDS_START:
      return {
        ...state,
        isFetching: true
      }
    case PhoneWordsActionTypes.FETCH_PHONEWORDS_SUCCESS:
      return {
        ...state,
        isFetching: false
      }
    case PhoneWordsActionTypes.FETCH_PHONEWORDS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}
