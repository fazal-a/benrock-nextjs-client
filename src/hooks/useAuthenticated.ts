// src/hooks/useAuthenticated.ts
export const useAuthenticated = () => {
    return !!sessionStorage.getItem('token');
};
