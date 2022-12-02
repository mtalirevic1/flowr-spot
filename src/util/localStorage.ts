export const getToken = (): string => localStorage.getItem('token') || ''

export const setToken = (token: string) => localStorage.setItem('token', token)