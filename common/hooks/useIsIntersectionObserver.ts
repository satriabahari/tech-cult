import { useIntersectionObserver } from "usehooks-ts";

const useIsIntersectionObserver = () => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });
  return { isIntersecting, ref };
};

export default useIsIntersectionObserver;
