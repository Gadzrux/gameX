interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

function ButtonComponenet({ children, onClick, color }: Props) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={"btn btn-" + color}
      id="btn"
    >
      {children}
    </button>
  );
}

export default ButtonComponenet;
