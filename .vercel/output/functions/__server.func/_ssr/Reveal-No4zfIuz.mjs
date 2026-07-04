import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function useInView(options) {
  const ref = reactExports.useRef(null);
  const [inView, setInView] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}
function Reveal({ children, className, stagger, delay = 0, as: Tag = "div" }) {
  const { ref, inView } = useInView();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      ref,
      className: cn(
        "transition-all duration-700 ease-out",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className
      ),
      style: { transitionDelay: `${delay}ms` },
      children: stagger ? (Array.isArray(children) ? children : [children]).map((child, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "transition-all duration-700 ease-out",
          style: {
            transform: inView ? "translateY(0)" : "translateY(20px)",
            opacity: inView ? 1 : 0,
            transitionDelay: `${delay + i * 100}ms`
          },
          children: child
        },
        i
      )) : children
    }
  );
}
export {
  Reveal as R
};
