const LOCALSTORAGE_KEY = 'MariBermusik';

export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(`${LOCALSTORAGE_KEY}-${key}`, value);
};
export const getLocalStorage = (key: string) => {
  return localStorage.getItem(`${LOCALSTORAGE_KEY}-${key}`);
};
export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(`${LOCALSTORAGE_KEY}-${key}`);
};
export const clearLocalStorage = () => {
  localStorage.clear();
};