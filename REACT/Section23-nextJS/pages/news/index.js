import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          {/* <a href="/news/next-js-is-great">NestJS Is a Great</a>in this case page is reloaded */}
          <Link href="/news/next-js-is-great">NestJS Is a Great</Link>
          {/* prevent browser default to reload page and change page */}
        </li>
        <li>NestJS Is NOT Great </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
