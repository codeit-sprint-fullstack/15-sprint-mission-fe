import { shimmerOverlay, skeleton } from "./Skeleton.css";

export function Skeleton({
  width = "100%",
  height,
  radius,
  className,
  ...rest
}) {
  const style = {
    width,
    height,
    ...(radius ? { borderRadius: radius } : {}),
  };

  return (
    <div
      className={`${skeleton} ${shimmerOverlay}${className ? ` ${className}` : ""}`}
      style={style}
      aria-hidden="true"
      {...rest}
    />
  );
}
