import Navbar from "../components/Navbar";
import Header from "../components/Header";
import RecentPosts from "../components/RecentPosts";
export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <Header />
      <RecentPosts />
    </div>
  );
}
