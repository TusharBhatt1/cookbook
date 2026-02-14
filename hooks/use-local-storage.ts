import { useEffect, useState } from "react";

export default function useLocalStorage({
  key,
  initialValue,
}: {
  key: string;
  initialValue: unknown;
}) {
  const [data, setData] = useState(() => {
    try {
      const dataInStorage = localStorage.getItem(key);
      if (dataInStorage) {
        return JSON.parse(dataInStorage);
      }
      return initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return {
    data,
    setData,
  };
}
