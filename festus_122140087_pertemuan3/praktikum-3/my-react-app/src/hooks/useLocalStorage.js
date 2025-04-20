import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // State untuk menyimpan value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Dapatkan dari localStorage berdasarkan key
      const item = window.localStorage.getItem(key);
      // Parse JSON jika ada, jika tidak return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Jika error, return initialValue
      console.error(error);
      return initialValue;
    }
  });

  // Effect untuk update localStorage ketika storedValue berubah
  useEffect(() => {
    try {
      // Simpan ke localStorage
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;