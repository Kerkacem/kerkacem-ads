import { useState, useEffect } from 'react';

// Define Account type instead of 'any'
interface AdAccount {
  id: string;
  name: string;
}

export const useMetaAccounts = (token: string) => {
  const [accounts, setAccounts] = useState<AdAccount[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
