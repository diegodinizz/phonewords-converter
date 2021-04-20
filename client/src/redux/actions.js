import { PhoneWordsActionTypes } from './types'
import { handleErrors } from './utils'

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

export const fetchPhoneWordsAsync = number => {
  return async dispatch => {
    dispatch(fetchPhoneWordsStart())

    try {
      const response = await fetch(`/phonewords/api/${number}`)
      const data = await handleErrors(response)
      dispatch(fetchPhoneWordsSuccess(data.phonewords))
    } catch (error) {
      return dispatch(fetchPhoneWordsFailure(error.message))
    }
  }
}
