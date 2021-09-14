import { MeetupDetail } from "../../components/meetups";

const MeetupDetails = ({ meetupData }) => {
  const { image, title, address, description } = meetupData;
  return (
    <MeetupDetail
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { meetupId: "m1" } }],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  // Fetch data for a single meetup
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "This is the first meetup",
        id: meetupId,
      },
    },
  };
}

export default MeetupDetails;
