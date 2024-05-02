"use client";

import useIsIntersectionObserver from "@/common/hooks/useIsIntersectionObserver";
import { useMenu } from "@/common/stores/menu";
import { useEffect } from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  [propName: string]: React.ReactNode | string | undefined;
};

export default function Container({
  children,
  className = "",
  ...others
}: ContainerProps) {
  const { isIntersecting, ref } = useIsIntersectionObserver();
  const { setIsActive, isActive } = useMenu();
  const idValue = others?.["id"];

  useEffect(() => {
    if (isIntersecting) {
      setIsActive(String(idValue));
    }
  }, [isIntersecting, idValue, setIsActive, isActive]);

  return (
    <section
      ref={ref}
      className={`scroll-mt-24 px-6 py-4 lg:scroll-mt-28 lg:px-24 ${className} `}
      {...others}
    >
      {children}
    </section>
  );
}
