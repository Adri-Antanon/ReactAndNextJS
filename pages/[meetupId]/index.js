import { ObjectId } from "mongodb";
import Head from "next/head";

import { connectToDatabase } from "../../lib/db";
import { MeetupDetail } from "../../components/meetups";

const MeetupDetails = ({ meetupData }) => {
  const { image, title, address, description } = meetupData;
  return (
    <>
      <Head>
        <title>{`${title}`}</title>
        <meta name="description" content={`${description}`} />
      </Head>
      <MeetupDetail
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await connectToDatabase();
  const db = client.db();
  const meetupsCollection = db.collection(`${process.env.mongodb_database}`);

  const meetups = await meetupsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();

  client.close();

  return {
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // Fetch data for a single meetup
  const meetupId = context.params.meetupId;

  const client = await connectToDatabase();
  const db = client.db();
  const meetupsCollection = db.collection(`${process.env.mongodb_database}`);

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        image: selectedMeetup.image,
      },
    },
  };
}

export default MeetupDetails;
