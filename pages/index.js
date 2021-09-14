import { useEffect, useState } from "react";
import { MeetupList } from "../components/meetups";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "This is a first meetup",
    address: "Meetupstreet 5, 12345 Meetup City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    address: "Meetupstreet 5, 12345 Meetup City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 600, //La página se refresca cada 600 segundos
  };
}

export default HomePage;
