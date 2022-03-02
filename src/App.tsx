import { useState } from "react";

import "./App.css";
import CompanyDetails from "./components/CompanyDetails";
import SearchBar from "./components/SearchBar";
import { requestCompanies } from "./API/API";
import Checkbox from "./components/Checkbox";
import ResetButton from "./components/ResetButton";
import { Companies } from "./Interfaces/Interfaces";

const App = () => {
  const [companies, setCompanies] = useState<Companies[]>([]);
  const [noResults, setNoResults] = useState<boolean>(false);
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const companySpecialities = [
    "Painting",
    "Cleaning",
    "Web design",
    "Sewing",
    "Handywork",
    "Engineering",
    "Advising",
  ];
  const clearResults = () => setCompanies([]);

  const onSearchSubmit = async (term: string, sspec: string) => {
    const companyArray = await requestCompanies(term.toLowerCase(), sspec);
    setNoResults(companyArray.length === 0);
    setCompanies(companyArray);
  };

  const cvProps = {
    companySpecialities,
    checkedValues,
    setCheckedValues,
    onSearchSubmit,
  };

  const renderedCompanies = companies.map((company, i) => {
    return <CompanyDetails companies={company} key={i} />;
  });

  return (
    <div className="app">
      <h1 className="title">Cosuno</h1>
      <div className="disclaimer-container">
        <p className="disclaimer">
          Search from{" "}
          <span className="highlight">
            the input or by filtering checkboxes
          </span>
          !
        </p>
      </div>

      <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults} />
      <ResetButton clearResult={clearResults} />
      <div className="checkbox-container">
        {" "}
        <Checkbox {...cvProps} />
      </div>
      {noResults && <p className="no-results">No results found.</p>}
      <div className="main-content">{renderedCompanies}</div>
    </div>
  );
};

export default App;
