import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";

import { createClient } from "contentful";
import * as RA from "react-icons";

// export async function getStaticProps() {
//   const client = createClient({
//     space: "7gnjvnxxtd47",
//     accessToken: "OgOY8SWvI0PrBtCWYquQ123DehJCO1S6XcHedTPMtrY",
//   });
//   const res = await client.getEntries({ content_type: "recipe" });

//   return {
//     props: {
//       data: res.items,
//     },
//   };
// }

export default function Home({ data }) {
  // console.log(data.map((d) => d["fields"].title));
  return (
    <div className={styles.container}>
      <Head>
        <title>PRIME Online</title>
        <meta name="description" content="We come to stay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="layout_container main_lay   ">
        <section className="bg-white  py-5 childy xl:rounded-md p-5 ">
          <div className="banner p-2">
            <div className="py-1 ">
              <span className=" font-bold py-5">NYX Online</span> is where your
              earn your passive income for posting and reading
            </div>
            <span className="banner_label text-xs ">
              <span className="bg-yellow-500 p-1 text-white font-bold">
                New
              </span>{" "}
              Join today and started earning by posting as an author and as a
              ready
            </span>
          </div>
          <div>
            {Array(25)
              .fill(<PostCard />)
              .map((post, index) => {
                return <div key={index}>{post}</div>;
              })}
          </div>
        </section>
        <section>
          <Sidebar />
        </section>
      </main>
    </div>
  );
}
