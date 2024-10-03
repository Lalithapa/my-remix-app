import { Link } from "@remix-run/react";

export default function Index() {

    return (
      <p id="index-page">
        This is a demo for Remix App.
        <br />
        Check out{" "}
        <Link to="/">the docs at remix.run</Link>.
      </p>
    );
  }
  