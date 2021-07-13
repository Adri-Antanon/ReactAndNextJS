import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/eventList";
import EventSearch from "../../components/events/eventSearch";

const AllEvents = () => {
  const events = getAllEvents();
  return (
    <>
      <EventSearch />
      <EventList items={events} />
    </>
  );
};

export default AllEvents;
