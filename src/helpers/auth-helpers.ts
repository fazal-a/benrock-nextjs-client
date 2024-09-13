import {privateAxios} from "@/guards/axios-interceptor";
import {AxiosError} from "axios";
import { signIn } from '@/context/auth-context';

interface LoginValues {
    email: string;
    password: string;
}
export const loginHandler = async (
    values:LoginValues,
    setSubmitting: (isSubmitting: boolean) => void,
    setErrors: (errors: Partial<{ [key: string]: string }>) => void,
    setStatus: (status: string | null) => void,
    signIn: (state: LoginValues) => Promise<void>,

) => {
    const data = {
        email: values.email, password: values.password
    }
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        // Make a POST request using the privateAxios instance
        const response = await privateAxios.post('/auth/login', data, config
        );

        // Call signIn from AuthContext to store the token and redirect to chat
        if(response.data.isSuccessful){
            await signIn({
                token: response.data.data.token,
                user: response.data.data.user
            });
        }else{
            setStatus(response.data.message);
        }
        console.log("Login successful", response.data);
    } catch (error) {
        const axiosError = error as AxiosError;
        console.error('Error logging in:', axiosError.message);

        // Set a general error if the login fails (e.g., network error)
        setStatus(axiosError?.response?.data?.message || 'Login failed, please try again.');
    } finally {
        setSubmitting(false)
    }
};

export const signupHandler = async (
    values:LoginValues,
    setSubmitting: (isSubmitting: boolean) => void,
    setErrors: (errors: Partial<{ [key: string]: string }>) => void,
    setStatus: (status: string | null) => void,
    signIn: (state: LoginValues) => Promise<void>,

) => {
    const data = {
        email: values.email, password: values.password
    }
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        // Make a POST request using the privateAxios instance
        const response = await privateAxios.post('/auth/login', data, config
        );

        // Call signIn from AuthContext to store the token and redirect to chat
        if(response.data.isSuccessful){
            await signIn({
                token: response.data.data.token,
                user: response.data.data.user
            });
        }else{
            setStatus(response.data.message);
        }
        console.log("Login successful", response.data);
    } catch (error) {
        const axiosError = error as AxiosError;
        console.error('Error logging in:', axiosError.message);

        // Set a general error if the login fails (e.g., network error)
        setStatus(axiosError?.response?.data?.message || 'Login failed, please try again.');
    } finally {
        setSubmitting(false)
    }
};
