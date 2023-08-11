"use client";

import { useEffect } from "react";
import EmptyPage from "./components/EmptyPage";

interface ErrorStateProps {
  error: Error;
}

const ErrorState = ({ error }: ErrorStateProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyPage title="Uh oh" subtitle="Something went wrong!" />;
};

export default ErrorState;
