import { useEffect, useState } from "react";

export default function useLocalStorage<T>({
  key,
  initialValue,
}: {
  key: string;
  initialValue: T;
}) {
  const [data, setData] = useState<T>(initialValue);

  // Load from localStorage (client only)
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const item = localStorage.getItem(key);
      if (item) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setData(JSON.parse(item));
      }
    } catch (error) {
      console.error(error);
    }
  }, [key]);

  // Save to localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  }, [key, data]);

  return { data, setData };
}
