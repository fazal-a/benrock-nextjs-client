// src/components/auth-guard.tsx
import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useAuthContext } from '@/context/auth-context';

interface Props {
    children?: ReactNode;
}

export const AuthGuard = ({ children }: Props) => {
    const { isAuthenticated, isLoading } = useAuthContext();
    const router = useRouter();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            if (!isAuthenticated) {
                router.push('/auth/login');
            } else {
                setChecked(true);
            }
        }
    }, [isAuthenticated, isLoading]);

    if (!checked) return null;

    return <>{children}</>;
};

AuthGuard.propTypes = { children: PropTypes.node };
