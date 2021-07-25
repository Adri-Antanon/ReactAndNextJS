import EventList from "../components/events/eventList";

import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = (props) => {
  const { events } = props;

  return <EventList items={events} />;
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
}
export default HomePage;
