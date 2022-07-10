import Navbar from "../components/Navbar";
import Header from "../components/Header";
import RecentPosts from "../components/RecentPosts";
import PersonalProjects from "../components/PersonalProjects";
import Subscribe from "../components/Subscribe";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>bughowi.dev</title>
        <meta name="description">
          A personal web to keep notes some of technology that I have been
          learned and maybe it is usefull for anyone else
        </meta>
      </Head>
      <div className="container mx-auto px-4">
        <Navbar />
        <Header />
        <RecentPosts />
        <PersonalProjects />
        <Subscribe />
      </div>
    </>
  );
}
