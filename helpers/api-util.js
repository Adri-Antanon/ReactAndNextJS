// import { MongoClient } from "mongodb";

export const BASE_URL =
  "https://nextjsexample-e9557-default-rtdb.firebaseio.com/";

// export async function MONGO_DB() {
//   await MongoClient.connect(
//     "mongodb+srv://Adri:Contra123@nextjscluster.bykul.mongodb.net/Newsletter?retryWrites=true&w=majority"
//   );
// }

export async function getAllEvents() {
  const response = await fetch(BASE_URL + "events.json");
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();

  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
