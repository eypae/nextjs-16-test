import React, { Suspense } from "react";
import ExploreBtn from "../components/ExploreBtn";
import EventList from "../components/EventList";

const Page = () => {
  return (
    <section>
      <h1 className={"text-center"}>
        Hi Summer :-) <br /> 为什么还没睡觉呢？
      </h1>
      <p className={"text-center mt-5"}>
        Hackathons, Meetups and Conferences, All in One Place
      </p>
      <ExploreBtn />
      <div className={"mt-20 space-y-7"}>
        <h3>Featured Events</h3>
        <Suspense fallback={<p>Loading events...</p>}>
          <EventList />
        </Suspense>
      </div>
    </section>
  );
};
export default Page;
