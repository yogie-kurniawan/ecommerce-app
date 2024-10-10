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
  const baseClasses = `flex items-center justify-center gap-2 font-medium focus:outline-none transition-all duration-300 ease-in-out`;

  const variants = {
    primary:
      "bg-primary-500 hover:bg-primary-600 text-white border border-primary-500",
    secondary:
      "bg-secondary-500 hover:bg-secondary-600 text-white border border-secondary-500",
    danger: "bg-red-500 hover:bg-red-600 text-white border border-red-500",
    "outline-primary":
      "bg-transparent hover:bg-primary-600 text-primary-500 hover:text-white border border-primary-500",
    "outline-secondary":
      "bg-transparent hover:bg-primary-600 text-secondary-500 hover:text-white border border-secondary-500",
  };

  const sizes = {
    sm: "px-2 py-2 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-4 text-2xl",
  };
  if (type == "link") {
    return (
      <Link
        {...attributes}
        to={href}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      {...attributes}
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
