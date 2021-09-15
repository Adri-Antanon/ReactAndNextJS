import Head from "next/head";

import { NewMeetupForm } from "../../components/meetups";
import { useRouter } from "next/router";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetup) => {
    const response = await fetch(`/api/new-meetup`, {
      method: "POST",
      body: JSON.stringify(enteredMeetup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler}>
        NewMeetupPage
      </NewMeetupForm>
    </>
  );
};

export default NewMeetupPage;
