// src/components/QueryStatusWrapper.tsx
import { UseQueryResult } from '@tanstack/react-query';
import React from 'react';

interface QueryStatusWrapperProps<T> {
  queryResult: UseQueryResult<T>;
  children: React.ReactNode;
}

const QueryStatusWrapper = <T,>({
  queryResult,
  children,
}: QueryStatusWrapperProps<T>) => {
  const { data, error, isLoading } = queryResult;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || (Array.isArray(data) && data.length === 0)) {
    return <div>No data...</div>;
  }

  return <>{children}</>;
};

export default QueryStatusWrapper;
