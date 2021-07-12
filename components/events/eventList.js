import React from "react";
import EventItem from "./eventItem";

import classes from "./event-list.module.css";

function EventList({ items }) {
  return (
    <ul>
      {items.map((event) => (
        <li className={classes.list}>
          <EventItem
            id={event.id}
            date={event.date}
            image={event.image}
            location={event.location}
            title={event.title}
            key={event.title + event.id}
          />
        </li>
      ))}
    </ul>
  );
}

export default EventList;
