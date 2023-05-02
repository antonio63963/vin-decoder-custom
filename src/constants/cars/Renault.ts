import { ICar } from "./cars.type";

const Renault: ICar = {
  // 5 position
  models: {
    "0": "Twingo",
    "1": "R4",
    "2": "R25",
    "3": "R4",
    "4": "R21 / Express",
    "5": "Clio I / Laguna / R19 / Safrane",
    A: "Megane I / Master",
    B: "Clio II",
    C: "Kangoo",
    D: "Master",
    E: "Espace III / Avantime",
    G: "Laguna II",
    H: "Master Propulsion",
    J: "Vel Satis / New Traffic",
    K: "Espace IV",
    L: "Trafic",
    M: "Megan II",
    P: "Modus",
    S: "Logan / Sandero / Duster / Dokker / Lodgy",
  },
  //// 4 position
  bodyTypes: {
    "0": '"малый" фургон с боковым остеклением (Dokker)',
    "3": '"большой" фургон (Traffic)',
    "4": "седан, 4 двери (Logan)",
    "5": "хетчбек, 5 дверей (Sandero)",
    "7": "универсал, 5 дверей, 7 мест (Logan MCV)",
    "8": '"малый" фургон с глухими боковинами (Dokker Van)',
    B: "хетчбек, 5 дверей",
    C: "хетчбек, 3 двери",
    D: "кабриолет / купе",
    E: "кабриолет / бортовой грузовик",
    F: "фургон",
    G: "универсал, 3 двери",
    H: "SUV / шасси с кабиной",
    J: "минивэн / универсал",
    K: "универсал",
    L: "седан, 4 двери",
    S: "универсал, 5 дверей",
    U: "шасси с кабиной",
  },

  details(vin: string) {
    return { model: this.models[vin[5]], bodyType: this.models[vin[4]] };
  },
};

export default Renault.details;
