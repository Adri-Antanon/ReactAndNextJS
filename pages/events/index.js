import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/eventList";
import EventSearch from "../../components/events/eventSearch";

const AllEvents = () => {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsSearch(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventsSearch} />
      <EventList items={events} />
    </>
  );
};

export default AllEvents;
