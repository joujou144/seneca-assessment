import classNames from "classnames";

export const cn = (...classes: (string | undefined)[]) => {
  return classNames(...classes);
};
