import EventList from "../components/events/eventList";

import { getFeaturedEvents } from "../dummy-data";

const Home = () => {
  const featureEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featureEvents} />
    </div>
  );
};

export default Home;
