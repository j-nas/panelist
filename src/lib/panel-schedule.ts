export class PanelSchedule {
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
  bus: {
    left: Bus;
    right: Bus;
  };

  constructor(data: PanelSchedule) {
    this.name = data.name || "H-EM";
    this.location = data.location || "Main Electrical Room";
    this.voltage = data.voltage || 208;
    this.phase = data.phase || 3;
    this.supply = data.supply || "WYE";
    this.busAmps = data.busAmps || 400;
    this.feederAmps = data.feederAmps || 400;
    this.kaic = data.kaic || 22;
    this.date = data.date || new Date();
    this.manufacturer = data.manufacturer || "Square D";
    this.bus = { left: [], right: [] };
  }

  private landCircuits(circuits: Circuit[]) {
    const leftBreakers = circuits
      .filter((circuit) => circuit.position % 2 === 0)
      .sort((a, b) => a.position - b.position);
    const rightBreakers = circuits
      .filter((circuit) => circuit.position % 2 !== 0)
      .sort((a, b) => a.position - b.position);
    for (const breaker of leftBreakers) {
      this.spaces.left.push(breaker);
      for (let i = 1; i < breaker.poles; i++) {
        this.spaces.left.push("SPACE");
      }
    }

    return { left: leftBreakers, right: rightBreakers };
  }

  private isSpaceFree(position: number) {
    throw new Error("Not implemented");
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
    id: crypto.randomUUID(),
    position: 1,
    label: "Receptacle",
    rating: 20,
    load: 1440,
    poles: 1,
  },
];
type Circuit = {
  id: string;
  position: number;
  label: string;
  rating: number;
  load: number;
  poles: 1 | 2 | 3;
};

type Space = 0;

type OnePoleBreaker = [Circuit];
type TwoPoleBreaker = [Circuit, Space];
type ThreePoleBreaker = [Circuit, Space, Space];
export type Bus = Array<OnePoleBreaker | TwoPoleBreaker | ThreePoleBreaker>;
