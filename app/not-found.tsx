import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <p>404</p>
      <h1>This frame is empty.</h1>
      <Link className="text-link" href="/">Return to the work</Link>
    </section>
  );
}
