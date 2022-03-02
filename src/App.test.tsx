import { render, screen } from "@testing-library/react";
import App from "./App";
import ResetButton from "./components/ResetButton";

const companyMock = [
  {
    name: "tormos",
    logo: "http://placekitten.com/g/200/300",
    specialities: "Painting",
    city: "berlin",
  },
  {
    name: "tudort",
    logo: "https://placekitten.com/g/200/300",
    specialities: "Cleaning",
    city: "hamburg",
  },
];

const companySpecialities = [
  "Painting",
  "Cleaning",
  "Web design",
  "Sewing",
  "Handywork",
  "Engineering",
  "Advising",
];

test("Reset button is present", () => {
  render(
    <ResetButton
      clearResult={() => {
        return [];
      }}
    />
  );
  const resetFilter = screen.getByText("Reset Filters");
  expect(resetFilter).toBeInTheDocument();
  expect(resetFilter).toBeTruthy();
});

test("Specialities checkbox component is present", () => {
  render(<App />);
  let spec = companySpecialities.map((item) => {
    return item;
  });
  expect(spec).toBeDefined();
  expect(spec).toBeTruthy();
});

test("Renders title of app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Cosuno/i);
  expect(linkElement).toBeInTheDocument();
});
