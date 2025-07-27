// hooks/useCookie.ts
import { useCallback } from 'react';

export function useCookie() {
  const setCookie = useCallback((name: string, value: any, days = 7) => {
    const stringValue = encodeURIComponent(JSON.stringify(value));
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${stringValue};expires=${expires.toUTCString()};path=/`;
  }, []);

  const getCookie = useCallback((name: string): any | null => {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let c = cookies[i].trim();
      if (c.startsWith(nameEQ)) {
        try {
          return JSON.parse(decodeURIComponent(c.substring(nameEQ.length)));
        } catch {
          return null;
        }
      }
    }
    return null;
  }, []);

  const removeCookie = useCallback((name: string) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  }, []);

  return { setCookie, getCookie, removeCookie };
}
