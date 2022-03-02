import "../css/Checkbox.css";
const Checkbox = (props: {
  companySpecialities: string[];
  checkedValues: any[];
  setCheckedValues: (arg0: any) => void;
  onSearchSubmit: (arg0: string, arg1: any) => void;
}) => {
  const handleChecked = (e: any) => {
    const specialities = props.companySpecialities[e.target.dataset.id];
    let newCheckedValues = props.checkedValues.filter(
      (item: any) => item !== specialities
    );
    if (e.target.checked) newCheckedValues.push(specialities);
    props.setCheckedValues(newCheckedValues);
    props.onSearchSubmit("", newCheckedValues);
  };

  return (
    <div className="checkbox-label">
      {props.companySpecialities.map((speciality: string, id: number) => (
        <label key={id}>
          <input
            className="checkbox-self"
            type="checkbox"
            data-id={id}
            onClick={handleChecked}
          />
          {speciality}
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
