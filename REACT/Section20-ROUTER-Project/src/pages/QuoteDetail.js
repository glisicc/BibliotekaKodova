import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found!!!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
