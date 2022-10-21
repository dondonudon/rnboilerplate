import * as Yup from 'yup';

export const numberOnly = '^[0-9]*$';
export const usernamePattern = '^[a-zA-Z0-9]+$';
export const passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$';
export const abnPattern = '^[0-9]{11}$';

export const hideEmailPartially = (email: string) => {
  return email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, '$1***@$2');
};

export const loginSchema = Yup.object().shape({
  email: Yup.string().required('Please fill out this field'),
  password: Yup.string().required('Please fill out this field'),
});

export const signupSchema = Yup.object().shape({
  name: Yup.string().required('Please fill out this field'),
  email: Yup.string().required('Please fill out this field'),
  password: Yup.string().required('Please fill out this field'),
  phone: Yup.string().required('Please fill out this field'),
  gym: Yup.string(),
});

export const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Old Password field is a required field'),
  newPassword: Yup.string()
    .matches(
      new RegExp(passwordPattern),
      'Set a password of at least 8 characters contains uppercase/lowercase letters, numbers, and special character.'
    )
    .required('New password is a required field'),
  confirmPassword: Yup.string()
    .required('Confirm password is a required field')
    .oneOf([Yup.ref('newPassword'), null], "Password doesn't match"),
});

export const forgetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid Email').required('Please fill out this field'),
});

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .matches(
      new RegExp(passwordPattern),
      'Set a password of at least 8 characters contains uppercase/lowercase letters, numbers, and special character.'
    )
    .required(),
  confirmPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], "Passwords doesn't match"),
});

export const accountSchema = Yup.object().shape({
  name: Yup.string(),
  password: Yup.string(),
  newPassword: Yup.string(),
  confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], "Passwords doesn't match"),
});

export const billSchema = Yup.object().shape({
  country: Yup.string(),
  address: Yup.string(),
  apartment: Yup.string(),
  company: Yup.string(),
  suburb: Yup.string(),
  postcode: Yup.number(),
  state: Yup.string(),
  cardholder: Yup.string().required('Please fill out this field'),
  cardnumber: Yup.string()
    .matches(new RegExp(numberOnly), 'Card number must be a number')
    .min(16, 'Card number must be 16 digits')
    .max(16, 'Card number must be 16 digits')
    .required('Card number is a required field'),
  expiry: Yup.string()
    .matches(new RegExp(numberOnly), 'Expired must be a number')
    .min(4, 'Expired must be 4 digits')
    .max(4, 'Expired must be 4 digits')
    .required('Expired is a required field'),
  cvv: Yup.string()
    .matches(new RegExp(numberOnly), 'CVV must be a number')
    .min(3, 'CVV must be 3 digits')
    .max(3, 'CVV must be 3 digits')
    .required('CVV is a required field'),
});
