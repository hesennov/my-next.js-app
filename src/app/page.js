import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Link href="/AboutUs">Hakkimizda</Link>
      <br />
      <Link href="/docs/post-1">post-1</Link>
      <br />
      <Link href="/docs/post-1/post-2">post-2</Link>
      <br />
      <Link
        target="_blank"
        className="test"
        href={{
          pathname: "/AboutUs",
          query: {
            name: "next.js",
            surname: "asdasd",
            // naasdasdasdme: "next.js",
          },
        }}
      >
        Hakkimizda sayfasi
      </Link>
    </div>
  );
};
export default page;
