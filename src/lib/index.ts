// import clsx, { ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";

// export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
import classNames from "classnames";

export const cn = (...classes: (string | undefined)[]) => {
  return classNames(...classes);
};
