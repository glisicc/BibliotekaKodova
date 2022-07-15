import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A FIrst Meetup",
    image:
      "https://media.istockphoto.com/photos/night-view-of-city-lights-in-front-of-marble-square-xuzhou-china-picture-id1225153424?k=20&m=1225153424&s=612x612&w=0&h=7CSsOx-VaAGZrkPCGMV47VEWrHUQXJ1GLwI4FWTeDj0=",
    address: "selo Sume bb",
    description: "first meetup",
  },
  {
    id: "m2",
    title: "A Secound Meetup",
    image:
      "https://media.istockphoto.com/photos/night-view-of-city-lights-in-front-of-marble-square-xuzhou-china-picture-id1225153424?k=20&m=1225153424&s=612x612&w=0&h=7CSsOx-VaAGZrkPCGMV47VEWrHUQXJ1GLwI4FWTeDj0=",
    address: "selo Sume bb",
    description: "secound meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
}

export default HomePage;
