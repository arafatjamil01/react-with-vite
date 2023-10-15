

interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger'; // color?:string means color is optional // writing words by bars means the value can be one of the words
  onClick: () => void;
}

function Button({ children, onClick, color = 'primary' }: Props) {
    

  return (
    <div>
      <button
        type="button"
        className={'btn btn-' + color}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
