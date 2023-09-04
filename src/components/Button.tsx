interface Props {
  buttonVariant: ReactNode;
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ buttonVariant, children, onClick }: Props) => {
  return (
    <button className={"btn btn-" + buttonVariant} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
