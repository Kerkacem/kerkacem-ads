import { useState, useEffect } from 'react';

export const useMetaAccounts = (token: string) => {
  const [accounts, setAccounts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/meta/accounts?token=${token}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setAccounts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAccounts();
  }, [token]);

  return { accounts, loading, error };
};
