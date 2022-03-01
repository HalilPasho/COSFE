import "../css/CompanyDetails.css";

const CompanyDetails = ({ companies }: any) => {
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="company-container">
      <div className="main-company-text">
        <span className="company-name-prefix">Company Name:</span>
        <span className="highlight">{companies.name}</span>
        <div className="company-name">
          <span className="company-name-prefix">Specialities:</span>
          <span className="specialities">
            {capitalizeFirstLetter(companies.specialities)}
          </span>
        </div>
        <div>
          <span className="company-name-prefix">Location:</span>
          {capitalizeFirstLetter(companies.city)}
        </div>
      </div>

      <img className="highlight" alt="company-logo" src={companies.logo} />
    </div>
  );
};

export default CompanyDetails;
