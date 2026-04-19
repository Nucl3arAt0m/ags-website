"use client";

import React, { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function ScrollReveal({ children, className = "", stagger = false }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1, freezeOnceVisible: true });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div
      ref={ref}
      className={`${className} ${stagger ? "stagger-container" : ""} reveal ${
        isVisible ? "reveal-visible" : ""
      }`}
    >
      {children}
    </div>
  );
}
