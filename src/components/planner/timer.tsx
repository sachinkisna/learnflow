"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);

  return (
    <div className="p-4 border rounded">
      <h3 className="font-bold">Learning Timer: {seconds}s</h3>
      <Button onClick={() => setActive(!active)}>{active ? "Pause" : "Start"}</Button>
    </div>
  );
}
