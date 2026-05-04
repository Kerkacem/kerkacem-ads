import { useState, useEffect } from 'react';

interface AdAccount {
  id: string;
  name: string;
}

export const useMetaAccounts = (token: string) => {
  const [accounts, setAccounts] = useState<AdAccount[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/meta/accounts?token=${token}`);
        if (!response.ok) throw new Error('Failed to fetch from ' + API_URL);
        const data = await response.json();
        setAccounts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAccounts();
  }, [token, API_URL]);

  return { accounts, loading, error };
};
