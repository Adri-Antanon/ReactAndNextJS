import { NewMeetupForm } from "../../components/meetups";

const NewMeetupPage = () => {
  const addMeetuHandler = (enteredMeetup) => {
    console.log(enteredMeetup);
  };
  return (
    <NewMeetupForm onAddMeetup={addMeetuHandler}>NewMeetupPage</NewMeetupForm>
  );
};

export default NewMeetupPage;
