import React from "react";
import EventItem from "./eventItem";

import classes from "./event-list.module.css";

function EventList({ items }) {
  return (
    <ul className={classes.container}>
      {items.map((event) => (
        <div className={classes.list} key={event.id}>
          <EventItem
            id={event.id}
            date={event.date}
            image={event.image}
            location={event.location}
            title={event.title}
            key={event.title + event.id}
          />
        </div>
      ))}
    </ul>
  );
}

export default EventList;
