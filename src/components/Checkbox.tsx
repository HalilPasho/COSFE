import "../css/Checkbox.css";
const Checkbox = (props: any) => {
  const handleChecked = (e: any) => {
    const hero = props.companySpecialities[e.target.dataset.id];
    let newCheckedValues = props.checkedValues.filter(
      (item: any) => item !== hero
    );
    if (e.target.checked) newCheckedValues.push(hero);
    props.setCheckedValues(newCheckedValues);
  };
  console.log(props.checkedValues);
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
