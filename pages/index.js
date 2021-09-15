import { connectToDatabase } from "../lib/db";

import { MeetupList } from "../components/meetups";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   // fetch data from an API
//   const { req, res } = context;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// Better option getStaticProps
export async function getStaticProps() {
  const client = await connectToDatabase();
  const db = client.db();
  const meetupsCollection = db.collection(`${process.env.mongodb_database}`);

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 600, //La página se refresca cada 600 segundos
  };
}

export default HomePage;
