import EventList from "../components/events/eventList";

import { getFeaturedEvents } from "../dummy-data";

const Home = () => {
  const featureEvents = getFeaturedEvents();
  return <EventList items={featureEvents} />;
};

export default Home;
