export const persistIntoLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
export const retrieveFromLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};
export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
