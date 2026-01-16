import React from "react";
import EventCard from "./EventCard";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";
import { connection } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventList = async () => {
  // "use cache";
  // cacheLife("hours");
  try {
    await connection();
    const response = await fetch(`${BASE_URL}/api/events`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.statusText}`);
    }

    const { events } = await response.json();

    if (!events || events.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center p-10">
          <p className="text-gray-400">No events found.</p>
        </div>
      );
    }

    return (
      <ul className={"events list-none"}>
        {events.map((event: IEvent) => (
          <li key={event.title}>
            <EventCard {...event} />
          </li>
        ))}
      </ul>
    );
  } catch (error) {
    console.error("Error loading events:", error);
    return (
      <div className="flex flex-col items-center justify-center p-10">
        <p className="text-red-500">
          Failed to load events. Please try again later.
        </p>
      </div>
    );
  }
};

export default EventList;
