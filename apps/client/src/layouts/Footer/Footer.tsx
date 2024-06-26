import { FC, ComponentPropsWithoutRef } from "react";

interface FooterProps extends ComponentPropsWithoutRef<"footer"> {}

const Footer: FC<FooterProps> = ({ ...props }) => {
  return (
    <footer className="mb-6 px-4 text-center text-gray-500" {...props}>
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Jeyhun. All rights reserved.
      </small>
    </footer>
  );
};

export { Footer };
