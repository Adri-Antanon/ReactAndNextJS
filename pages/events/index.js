import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/eventList";
import EventSearch from "../../components/events/eventSearch";

const AllEvents = ({ events }) => {
  const router = useRouter();

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

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEvents;
