import _ from "lodash";

export const requestCompanies = _.memoize(
  async (title: string, specialities: string) => {
    const res = await fetch(
      `http://localhost:3001/companies?name=${title}&specialities=${specialities}`
    );

    // In case we get not okay response
    if (res.status !== 200) return [];

    const companyArray = await res.json();
    return companyArray;
  }
);
