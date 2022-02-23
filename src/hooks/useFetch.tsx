import React from "react";
import { useState } from "react";
import { FunctionLikeDeclaration } from "typescript";

interface Props {
  callback: Function;
  headers: object;
}

const useFetch = ({ callback, headers }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGET = async (url: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(url);

      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

      const data = await res.json();

      callback(data);
    } catch (err: any) {
      setError("There was a problem fetching data");
    }
  };

  return { error, isLoading };
};

export default useFetch;
