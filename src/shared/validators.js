import { validPassword, validEmail } from './constants/regexp';

export const checkValidPassword = password => password.match(validPassword);

export const checkValidEmail = email => email.match(validEmail);
