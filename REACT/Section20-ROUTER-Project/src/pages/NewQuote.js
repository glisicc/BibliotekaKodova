import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push("/quotes"); //with push user can go back on prev page, with replace current page will be raeplaced with new page and user cant go back
  };
  return <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>;
};

export default NewQuote;
