"use client";

import { useEffect } from "react";
import { Section } from "../page.styled";
import { ErrorTitle } from "./page.styled";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main>
      <Section>
        <ErrorTitle>Something went wrong!</ErrorTitle>
      </Section>
    </main>
  );
}
