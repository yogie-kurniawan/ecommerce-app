import { Link } from "react-router-dom";

const Button = ({
  children,
  type = "button",
  href,
  variant,
  size = "md",
  className = "",
  ...attributes
}) => {
  const baseClasses = `flex items-center justify-center gap-2 font-medium focus:outline-none transition-all duration-300 ease-in-out rounded-[30px]`;

  const variants = {
    primary:
      "bg-primary hover:bg-primary-dark hover:border-primary-dark text-white border border-primary",
    secondary:
      "bg-secondary hover:bg-secondary-dark hover:border-secondary-dark text-white border border-secondary",
    danger:
      "bg-red hover:bg-red-dark hover:border-red-dark text-white border border-red",
    "primary-outline":
      "bg-transparent hover:bg-primary hover:border-primary text-primary hover:text-white border border-primary",
    "secondary-outline":
      "bg-transparent hover:bg-secondary hover:border-secondary text-secondary hover:text-white border border-secondary",
  };

  const sizes = {
    sm: "px-3 py-2 text-xs",
    md: "px-5 py-2 text-sm",
    lg: "px-6 py-3 text-sm md:px-8 md:py-3 md:text-lg",
  };
  if (type == "link") {
    return (
      <Link
        {...attributes}
        to={href}
        className={`${className} ${baseClasses} ${variants[variant]} ${sizes[size]}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      {...attributes}
      type={type}
      className={`${className} ${baseClasses} ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
