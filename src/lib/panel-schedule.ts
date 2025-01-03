class PanelSchedule {
  name: string;
  location: string;
  voltage: number;
  phase: number;
  supply: string;
  busAmps: number;
  feederAmps: number;
  kaic: number;
  date: Date;
  manufacturer: string;
  spaces: Array<Circuit | Spare | Space> = [];
  circuits: Circuit[];

  constructor(data: PanelSchedule) {
    this.name = data.name;
    this.location = data.location;
    this.voltage = data.voltage;
    this.phase = data.phase;
    this.supply = data.supply;
    this.busAmps = data.busAmps;
    this.feederAmps = data.feederAmps;
    this.kaic = data.kaic;
    this.date = data.date;
    this.manufacturer = data.manufacturer;

    this.circuits = data.circuits;

  }


  landCircuits(circuits: Circuit[]) {
    this.spaces = circuits;
  }
}

const panelScheduleA = {
  name: "H-EM",
  location: "Main Electrical Room",
  voltage: "208/120V",
  phase: 3,
  supply: "WYE",
  busAmps: 400,
  feederAmps: 400,
  kaic: 22,
  date: new Date(),
  manufacturer: "Square D",

};


const circuits = [
  {
    position: 1,
    label: "Receptacle",
    rating: 20,
    load: 1440,
    poles: 1,
  }
]
type Circuit = {
  position: number;
  label: string;
  rating: number;
  load: number;
  poles: 1 | 2 | 3;
}

type Spare = {
  position: number;
  label: "Spare";
  rating: 0;
  load: 0;
}

type Space = {
  position: number;
  label: "";
  rating: 0;
  load: 0;
}