import { PhoneWordsActionTypes } from './types'

const INITIAL_STATE = {
  wordsData: [],
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
        isFetching: false,
        wordsData: action.payload
      }
    case PhoneWordsActionTypes.FETCH_PHONEWORDS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    case PhoneWordsActionTypes.CLEAR_PHONEWORDS:
      return {
        ...state,
        wordsData: []
      }
    default:
      return state
  }
}
