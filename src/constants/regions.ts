type RegionKey = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' |
'G' | 'H' | 'J' | 'K' | 'L' | 'M' |
'N' | 'P' | 'R' | 'S' | 'T' | 'U' |
'V' | 'W' | 'X' | 'Y' | 'Z' | '1' |
'2' | '3' | '4' | '5' | '6' | '7' |
'8' | '9' | '0';

interface RegionValue {
  region: string;
  country: (data: string) => string | undefined;
}

type Regions = {
  [key: string]: RegionValue;
};

function isAE(letter: string): boolean {
  return "ABCDE".includes(letter);
}
function isFK(letter: string): boolean {
  return "FGHJK".includes(letter);
}
function isLR(letter: string): boolean {
  return "LMNPR".includes(letter);
}
function isS0(letter: string): boolean {
  return "STUVWXYZ1234567890".includes(letter);
}
function isA0(letter: string): boolean {
  return "ABCDEFGHJKLMNPRSTUVWXYZ1234567890".includes(letter);
}
function isSW(letter: string): boolean {
  return "STUVW".includes(letter);
}
function isX2(letter: string): boolean {
  return "XYZ12".includes(letter);
}

const regions: Regions = {
  A: {
    region: "Africa",
    country: function (secondLetter: string) {
      if ("ABCDEFGH".includes(secondLetter))
        return "South Africa";
      if ("JKLMN".includes(secondLetter))
        return "Ivory Coast";
    },
  },
  B: {
    region: "Africa",
    country: function (secondLetter: string) {
      if (isAE(secondLetter))
        return "Angola";
      if (isFK(secondLetter))
        return "Kenya";
      if (isLR(secondLetter))
        return "Tanzania";
    },
  },
  C: {
    region: "Africa",
    country: function (secondLetter: string) {
      if (isAE(secondLetter))
        return "Benin";
      if (isFK(secondLetter))
        return "Madagascar";
      if (isLR(secondLetter))
        return "Tunisia";
    },
  },
  D: {
    region: "Africa",
    country: function (secondLetter: string) {
      if (isAE(secondLetter))
        return "Egypt";
      else if (isFK(secondLetter))
        return "Morocco";
      else if (isLR(secondLetter))
        return "Zambia";
    },
  },
  E: {
    region: "Africa",
    country: function (secondLetter: string) {
      if (isAE(secondLetter))
        return "Ethiopia";
      else if (isFK(secondLetter))
        return "Mozambique";
    },
  },
  F: {
    region: "Africa",
    country: function (secondLetter: string) {
      if (isAE(secondLetter))
        return "Ghana";
      else if (isFK(secondLetter))
        return "Nigeria";
    },
  },
  J: {
    region: "Asia",
    country: function (secondLetter: string) {
      if (isA0(secondLetter))
        return "Japan";
    },
  },
  K: {
    region: "Asia",
    country: function (secondLetter: string) {
      if (isAE(secondLetter))
        return "Sri Lanka";
      else if (isFK(secondLetter))
        return "Israel";
      else if (isLR(secondLetter))
        return "South Korea";
      else if (isS0(secondLetter))
        return "Kazakhstan";
    },
  },
  L: {
    region: "Asia",
    country: function (secondLetter: string) {
      if (isA0(secondLetter))
        return "China";
    },
  },
  M: {
    region: "Asia",
    country: function (secondLetter: string) {
      if (isAE(secondLetter))
        return "India";
      else if (isFK(secondLetter))
        return "Indonesia";
      else if (isLR(secondLetter))
        return "Thailand";
      else if (isS0(secondLetter))
        return "Myanmar";
    },
  },
  N: {
    region: "Asia",
    country: function (secondLetter: string) {
      if (isAE(secondLetter))
        return "Iran";
      else if (isFK(secondLetter))
        return "Pakistan";
      else if (isLR(secondLetter))
        return "Turkey";
    },
  },
  P: {
    region: "Asia",
    country: function (secondLetter: string) {
      if (isAE(secondLetter))
        return "Philippines";
      else if (isFK(secondLetter))
        return "Singapore";
      else if (isLR(secondLetter))
        return "Malaysia";
    },
  },
  R: {
    region: "Asia",
    country: function (secondLetter: string) {
      if (isAE(secondLetter))
        return "United Arab Emirates";
      else if (isFK(secondLetter))
        return "Taiwan";
      else if (isLR(secondLetter))
        return "Vietnam";
      else if (isS0(secondLetter))
        return "Saudi Arabia";
    },
  },
  S: {
    region: "Europe",
    country: function (secondLetter: string) {
      if ("ABCDEFGHJKLM".includes(secondLetter))
        return "United Kingdom";
      else if ("NPRST".includes(secondLetter))
        return "East Germany";
      else if ("UVWXYZ".includes(secondLetter))
        return "Poland";
      else if ("1234".includes(secondLetter))
        return "Latvia";
    },
  },
  T: {
    region: "Europe",
    country: function (secondLetter: string) {
      if ("ABCDEFGH".includes(secondLetter))
        return "Switzerland";
      else if ("JKLMNP".includes(secondLetter))
        return "Czech Republic";
      else if ("RSTUV".includes(secondLetter))
        return "Hungary";
      else if ("WXYZ1".includes(secondLetter))
        return "Portugal";
    },
  },
  U: {
    region: "Europe",
    country: function (secondLetter: string) {
      if ("HJKLM".includes(secondLetter))
        return "Denmark";
      else if ("NPRST".includes(secondLetter))
        return "Ireland";
      else if ("UVWXYZ".includes(secondLetter))
        return "Romania";
      else if ("567".includes(secondLetter))
        return "Slovakia";
    },
  },
  V: {
    region: "Europe",
    country: function (secondLetter: string) {
      if (isAE(secondLetter))
        return "Austria";
      else if ("FGHJKLMNPR".includes(secondLetter))
        return "France";
      else if (isSW(secondLetter))
        return "Spain";
      else if (isX2(secondLetter))
        return "Serbia";
      else if ("345".includes(secondLetter))
        return "Croatia";
      else if ("67890".includes(secondLetter))
        return "Estonia";
    },
  },
  W: {
    region: "Europe",
    country: function (secondLetter: string) {
      if (isA0(secondLetter))
        return "Germany";
    },
  },
  X: {
    region: "Europe",
    country: function (secondLetter: string) {
      if (isAE(secondLetter))
        return "Bulgaria";
      else if (isFK(secondLetter))
        return "Greece";
      else if (isLR(secondLetter))
        return "Netherlands";
      else if (isSW(secondLetter))
        return "Russia (USSR)";
      else if (isX2(secondLetter))
        return "Luxembourg";
      else if ("34567890".includes(secondLetter))
        return "Russia";
    },
  },
  Y: {
    region: "Europe",
    country: function (secondLetter: string) {
      if (isAE(secondLetter))
        return "Belgium";
      else if (isFK(secondLetter))
        return "Finland";
      else if (isLR(secondLetter))
        return "Malta";
      else if (isSW(secondLetter))
        return "Sweden";
      else if ("XYZ12".includes(secondLetter))
        return "Norway";
      else if ("345".includes(secondLetter))
        return "Belarus";
      else if ("67890".includes(secondLetter))
        return "Ukraine";
    },
  },
  Z: {
    region: "Europe",
    country: function (secondLetter: string) {
      if ("ABCDEFGHJKLMNPR".includes(secondLetter))
        return "Italy";
      else if (isX2(secondLetter))
        return "Slovenia";
      else if ("345".includes(secondLetter))
        return "Lithuania";
    },
  },
  "1": {
    region: "North America",
    country: function (secondLetter: string) {
      if (isA0(secondLetter))
        return "USA";
    },
  },
  "2": {
    region: "North America",
    country: function (secondLetter: string) {
      if (isA0(secondLetter))
        return "Canada";
    },
  },
  "3": {
    region: "North America",
    country: function (secondLetter: string) {
      if ("ABCDEFGHJKLMNPRSTUVW".includes(secondLetter))
        return "Mexico";
      if ("XYZ1234567".includes(secondLetter))
        return "Costa Rica";
      if ("890".includes(secondLetter))
        return "Cayman Islands";
    },
  },
  "4": {
    region: "North America",
    country: function (secondLetter: string) {
      if (isA0(secondLetter))
        return "USA";
    },
  },
  "5": {
    region: "North America",
    country: function (secondLetter: string) {
      if (isA0(secondLetter))
        return "USA";
    },
  },
  "6": {
    region: "Oceania",
    country: function (secondLetter: string) {
      if ("ABCDEFGHJKLMNPRSTUVW".includes(secondLetter))
        return "Australia";
    },
  },
  "7": {
    region: "Oceania",
    country: function (secondLetter: string) {
      if (isAE(secondLetter))
        return "New Zealand";
    },
  },
  "8": {
    region: "South America",
    country: function (secondLetter: string) {
      if (isAE(secondLetter))
        return "Argentina";
      if (isFK(secondLetter))
        return "Chile";
      if (isLR(secondLetter))
        return "Ecuador";
      if (isSW(secondLetter))
        return "Peru";
      if (isX2(secondLetter))
        return "Venezuela";
    },
  },
  "9": {
    region: "South America",
    country: function (secondLetter: string) {
      if (isAE(secondLetter))
        return "Brazil";
      if (isFK(secondLetter))
        return "Colombia";
      if (isLR(secondLetter))
        return "Paraguay";
      if (isSW(secondLetter))
        return "Uruguay";
      if (isX2(secondLetter))
        return "Trinidad & Tobago";
      if ("3456789".includes(secondLetter))
        return "Brazil";
    },
  },
};

export default regions;
