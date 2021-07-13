import { useRouter } from "next/router";
import EventList from "../../components/events/eventList";
import ResultsTitle from "../../components/events/results-title";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEvents = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter, please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  const date = new Date(numYear, numMonth -1);

  return (
    <>
      <ResultsTitle date={} />
      <EventList items={filteredEvents}></EventList>
    </>
  );
};

export default FilteredEvents;
