"use client";

import { PanelSchedule } from "@/lib/panel-schedule";

export default function PanelScheduleDisplay() {
  const panel = new PanelSchedule();

  return (
    <div className="h-auto w-[5in] bg-white text-black">
      <h1>Panel Schedule</h1>
    </div>
  );
}
