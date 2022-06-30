import QuoteList from "../components/quotes/QuoteList";

const DUMY_QUOTES = [
  {
    id: "q1",
    author: "Max",
    text: "Learning React is FUNN",
  },
  {
    id: "q2",
    author: "Max",
    text: "Learning React is GREAT",
  },
];

const AllQuote = () => {
  return <QuoteList quotes={DUMY_QUOTES}></QuoteList>;
};

export default AllQuote;
