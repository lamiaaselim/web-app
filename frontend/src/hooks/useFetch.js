/*
The logic for hooks/useFetch.js is to centralize the fetch-related logic in your application
into a reusable custom hook. This approach promotes DRY (Don't Repeat Yourself) principles,
reduces redundancy, and makes the codebase more maintainable and testable.
Instead of writing fetch or async logic in every component that needs data fetching,
you can refactor that logic into a dedicated useFetch hook.

Advantages of Creating useFetch:
- Reusability: You can use it across multiple components that need to fetch data.
- Separation of Concerns: Keeps your components clean and focused on rendering.
- Error Handling: Centralizes error management.
- Testability: Easier to test a single hook than scattered fetch logic in components.

*/
import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
