import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useAuthContext } from '@/context/auth-context';

interface Props {
    children?: ReactNode;
}

interface useAuthContextProps {
    isAuthenticated?: boolean
    isLoading?: boolean;
}

export const AuthGuard = ({ children }: Props) => {
    const {isAuthenticated, isLoading } = useAuthContext();
    const router = useRouter();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            if (!isAuthenticated) {
                router.push('/login');
            } else {
                setChecked(true);
            }
        }
    }, [isAuthenticated, isLoading]); // Correctly close the useEffect function here

    if (!checked) return null;

    console.log(
        "isAuthenticated:::",
        isAuthenticated,
        "isLoading:::",
        isLoading,
        "checked::",
        checked
    );

    return <>{children}</>;
};

AuthGuard.propTypes = { children: PropTypes.node };
