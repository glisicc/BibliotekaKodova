import { useRouter } from "next/router";

//domain/news/something

function Something() {
  const router = useRouter(); //get access to URL

  const newsId = router.query.newsId;

  //send a request to backend API...

  return <h1>Something</h1>;
}

export default Something;
