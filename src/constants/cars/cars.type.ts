interface Models {
  [key: string]: string;
}
interface BodyTypes {
  [key: string]: string;
}

interface ICar {
  models: Models;
  bodyTypes: BodyTypes;
  details?: (vds: string) => {model: string, bodyType: string}
}

export { Models, BodyTypes, ICar };
