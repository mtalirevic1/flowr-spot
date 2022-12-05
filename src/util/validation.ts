/*Email consists of two parts. In which one part is the local part and the other is the domain part.

The local part of any email address may include the following:

Any letter or number: a-z, A-Z, 0-9.
A dot (.) but should not be first or last character.
punctuation: “(),:;<>@[]
special characters: !#$%&’*+-/=?^_{|}~

The domain part of any email address may include the following:

Any letter or number: a-z, A-Z, 0-9.
The hyphen (-) but should not be first or last character.*/
import dayjs, {Dayjs} from 'dayjs'

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const isEmailValid = (email: string): boolean => !!email.match(emailRegex)

//password length at least 8 characters ,at least 1 digit, 1 lower case,
// 1 upper case, 1 special character
const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/
export const isPasswordValid = (password: string): boolean => !!password.match(passwordRegex)

//Date of birth has to be before today
export const isDateValid = (date: Dayjs | null): boolean => !!date && date.isBefore(dayjs())