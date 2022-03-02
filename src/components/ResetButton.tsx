import "../css/ResetButton.css";
type Props = {
  clearResult: React.MouseEventHandler<HTMLButtonElement>;
};
function ResetButton({ clearResult }: Props) {
  return (
    <div className="button-container">
      <button onClick={clearResult} className="clear-filters">
        Reset Filters
      </button>
    </div>
  );
}

export default ResetButton;
