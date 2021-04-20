import { PhoneWordsActionTypes } from './types'

export const fetchPhoneWordsStart = () => ({
  type: PhoneWordsActionTypes.FETCH_PHONEWORDS_START
})

export const fetchPhoneWordsSuccess = words => ({
  type: PhoneWordsActionTypes.FETCH_PHONEWORDS_SUCCESS,
  payload: words
})

export const fetchPhoneWordsFailure = errorMessage => ({
  type: PhoneWordsActionTypes.FETCH_PHONEWORDS_FAILURE,
  payload: errorMessage
})

export const clearPhoneWords = () => ({
  type: PhoneWordsActionTypes.CLEAR_PHONEWORDS
})

export const fetchPhoneWordsAsync = number => {
  return async dispatch => {
    dispatch(fetchPhoneWordsStart())

    const response = await fetch(`/phonewords/api/${number}`)
    const data = await response.json()

    const { success, error, phonewords } = data

    if (!success) {
      dispatch(fetchPhoneWordsFailure(error))
    }

    dispatch(fetchPhoneWordsSuccess(phonewords))
  }
}
