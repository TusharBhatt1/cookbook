import { DEBOUNCE_THRESHOLD } from "@/constant";
import { useEffect } from "react";

export default function useDebounce({
  value,
  cb,
}: {
  value: string;
  cb: (v: string) => void;
}) {
  useEffect(() => {
    const timer = setTimeout(() => cb(value), DEBOUNCE_THRESHOLD);
    return () => clearTimeout(timer);
  }, [cb, value]);
}
