import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  function addMeetupHandler(enetredMeetup) {
    console.log(enetredMeetup);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
}

export default NewMeetup;
