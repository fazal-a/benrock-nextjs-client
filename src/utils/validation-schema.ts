import * as Yup from "yup";

export const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password should be at least 8 characters')
        .required('Password is required'),
});


export const signupValidationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    username: Yup.string().required('Username is required'),
    gender: Yup.string(),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password should be at least 8 characters').required('Password is required'),
});
