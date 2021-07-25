import { useRouter } from "next/router";
import EventList from "../../components/events/eventList";
import ResultsTitle from "../../components/events/results-title";
import { getFilteredEvents } from "../../helpers/api-util";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

const FilteredEvents = (props) => {
  const { hasError, events, date } = props;
  const router = useRouter();

  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter, please adjust your values!</p>
        </ErrorAlert>
      </>
    );
  }

  const filteredEvents = events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events!</Button>
        </div>
      </>
    );
  }

  const newDate = new Date(date.year, date.month - 1);

  return (
    <>
      <ResultsTitle date={newDate} />
      <EventList items={filteredEvents}></EventList>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;

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
    return {
      props: { hasError: true },
      // Una opción es enviar el prop de no encontrado y redirigiar a una página que haga saltar mi 404.js
      // notFound: true,
      // redirect: {
      //   destination: "/error",
      // },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}

export default FilteredEvents;
