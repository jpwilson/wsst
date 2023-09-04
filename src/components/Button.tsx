interface Props {
  buttonVariant?: "primary" | "secondary" | "danger" | "warning";
  children: string;
  onClick: () => void;
}

const Button = ({ buttonVariant = "primary", children, onClick }: Props) => {
  return (
    <button className={"btn btn-" + buttonVariant} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
