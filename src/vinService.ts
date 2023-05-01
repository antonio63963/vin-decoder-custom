import regions from "./constants/regions";
import brands from "./constants/brands";


function decodeVIN() {}

function getRegion(firstLetter: string, secondLetter: string) {
  return {
    region: regions[firstLetter].region,
    country: regions[firstLetter].country(secondLetter),
  };
};

function getBrand(region: string, wmi: string): string | null {
  const regionBrands = brands[region];
  let brand = regionBrands[wmi];
  if(!brand) {
    brand = regionBrands[wmi.slice(0,2)]
  };
  return brand || null;
};

function getWMI(vin: string) {
  const formatedVIN = vin.toUpperCase();
  const wmi = formatedVIN.slice(0, 3);

  const {region, country} = getRegion(vin[0], vin[1]);
  console.log(region, country)
  const brand = getBrand(region, wmi);
  return {
    wmi: wmi,
    region,
    country,
    brand
  }
}

export { getWMI };
