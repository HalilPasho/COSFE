import { useState } from "react";

import "./App.css";
import CompanyDetails from "./components/CompanyDetails";
import SearchBar from "./components/SearchBar";
import { requestCompanies } from "./API/API";
import Checkbox from "./components/Checkbox";

const App = () => {
  const [companies, setCompanies] = useState<any>([]);
  const [noResults, setNoResults] = useState<boolean>(false);
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const companySpecialities = [
    "Painting",
    "Cleaning",
    "Web design",
    "Sewing",
    "Handywork",
    "Engineering",
    "Advising",
  ];
  const [checkedValues, setCheckedValues] = useState([]);
  const cvProps = { companySpecialities, checkedValues, setCheckedValues };

  const onSearchSubmit = async (term: string) => {
    console.log("New Search submit:", term);
    const companyArray = await requestCompanies(term.toLowerCase(), "");
    setNoResults(companyArray.length === 0);
    setCompanies(companyArray);
  };

  const clearResults = () => setCompanies([]);

  // const handleChange = (e: any) => {
  //   setCheckbox(!checkbox);
  //   console.log(e.target.id);
  //   console.log("111", e.target.value);
  // };

  const renderedCompanies = companies.map((company: string, i: number) => {
    return <CompanyDetails companies={company} key={i} />;
  });

  // const renderedSpecialities = companySpecialities.map(
  //   (specialities: string, i: number) => {
  //     return <Checkbox {...cvProps} key={i} />;
  //   }
  // );

  return (
    <div className="app">
      <h1 className="title">Search Dicka "{"NDROJE MOS HARRO"}"</h1>
      <div className="disclaimer-container">
        <p className="disclaimer">
          Get 10 quotes from{" "}
          <span className="highlight">anime NDROJE MOS HARRO</span>!
        </p>
      </div>

      <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults} />
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
