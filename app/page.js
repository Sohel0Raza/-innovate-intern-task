import Banner from "./components/Banner";
import Discover from "./components/Discover";
import Exploer from "./components/Exploer";
import Overview from "./components/Overview";
import Signup from "./components/Signup";

export default function Home() {
  return (
    <div>
      <Banner />
      <Signup />
      <Exploer/>
      <Overview/>
      <Discover/>
    </div>
  );
}
