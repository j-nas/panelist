import type { Bus } from "./panel-schedule";

export const mockBreakers: Bus = [
  [
    {
      id: crypto.randomUUID(),
      position: 1,
      label: "Receptacle",
      rating: 20,
      load: 1440,
      poles: 1,
    },
  ],
  [
    {
      id: crypto.randomUUID(),
      position: 3,
      label: "Receptacle",
      rating: 20,
      load: 1440,
      poles: 2,
    },
    0,
  ],
  [
    {
      id: crypto.randomUUID(),
      position: 5,
      label: "Receptacle",
      rating: 20,
      load: 1440,
      poles: 3,
    },
    0,
    0,
  ],
];
