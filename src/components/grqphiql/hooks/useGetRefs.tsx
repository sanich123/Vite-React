import { useRef } from 'react';

export function useGetRefs() {
  const parent = useRef<HTMLDivElement | null>(null);
  const resizer = useRef<HTMLDivElement | null>(null);
  const leftSide = useRef<HTMLDivElement | null>(null);
  const up = useRef<HTMLInputElement | null>(null);
  return { parent, resizer, leftSide, up };
}
