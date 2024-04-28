import { EVENTS } from "@/common/constants/events";
import React from "react";
import EventCard from "./EventCard";

export default function LombaList() {
  const filteredEvent = EVENTS.filter((event) => event.isShow);
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-3">
      {filteredEvent.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  );
}
