import countries from "world-countries";

let formatCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

const useCountries = () => {
  const getAllCountries = () => formatCountries;
  const getByValue = (value: string) => {
    return formatCountries.find((item) => item.value === value);
  };

  return {
    getAllCountries,
    getByValue,
  };
};

export default useCountries;
