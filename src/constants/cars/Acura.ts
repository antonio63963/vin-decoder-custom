import { ICar } from "./cars.type";

const Acura: ICar = {
  // 4-5-6
  models: {
    CC2: "Vigor (2.5 литра)",
    CU2: "TSX (2008...) (2.4 литра))",
    CU4: "TSX V6 Tech",
    CW2: "TSX Wagon",
    DA9: "Integra (1.8 литра)",
    DB1: "Integra",
    DB2: "Integra GS-R",
    DB7: "Integra",
    DB8: "Integra GS-R",
    DC2: "Integra Coupe",
    DC4: "Integra Coupe",
    DE1: "ILX20",
    DE2: "ILX24",
    DE3: "ILX",
    DJ5: "SLX",
    DC5: "RSX (2.0 литра) (WMI для этой моделиJH4)",
    KA7: "Legend V6 3.2 4D",
    KA8: "Legend V6 3.2 2D",
    KA9: "RL I (3.5 литра) (1999...2004)",
    KB1: "RL II (3.5 литра) (2004...) (WMI для этой моделиJH4)",
    KC1: "RLX",
    KC2: "RLX Hybrid (AWD)",
    NA1: "NSX 3.0",
    NA2: "NSX 3.2",
    TB1: "RDX (2.3 литра) (WMI для этой модели5J8)",
    TB3: "RDX II",
    TB4: "RDX AWD II",
    UA2: "TL I (1998...2003) (2.3/2.5 литра)",
    UA3: "TL I (1998...2003) (3.2 литра)",
    UA5: "TL I (1998...2003) (3.2 литра)",
    UA6: "TL II (2003...) (3.2 литра) (WMI для этой модели19U)",
    UA7: "TL II (2003...) (3.5 литра) (WMI для этой модели19U)",
    UA8: "TL III",
    UA9: "TL Sh-AWD III",
    UB1: "TLX",
    UB2: "TLX V6",
    UB3: "TLX SH-AWD V6",
    YA1: "CL (1998...2002) (2.2 литра)",
    YA2: "CL (1998...2002) (3.0 литра)",
    YA3: "CL (1998...2002) (2.3 литра)",
    YA4: "CL (1998...2002) (3.2 литра)",
    YB1: "ZDX (2009...) (3.7 литра)",
    YD1: "MDX (3.5 литра) (WMI для этой модели2HN)",
    YD2: "MDX (3.7 литра) (WMI для этой модели2HN)",
    YD3: "MDX II",
    YD4: "MDX SH-AWD II",
  },
  //7
  bodyTypes: {
    "1": "2 Door Coupe, Manual",
    "2": "2 Door Coupe, Automatic",
    "3": "Hatchback, Manual",
    "4": "Hatchback, Auto",
    "5": "4 Door Sedan, Manual",
    "6": "4 Door Sedan, Automatic",
    "7": "5 Door Wagon, Manual",
    "8": "5 Door Wagon, Automatic",
  },
  details(vin: string) {
    return {
      model: this.models[vin.slice(4, 3)],
      bodyType: this.bodyTypes[vin[7]]
    }
  }
};

export default Acura.details;
