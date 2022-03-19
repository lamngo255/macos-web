import { FC, useEffect, useState } from "react";
import Title from "../components/Title";
import LoadingScreen from "../components/LoadingScreen";

const Home: FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);

  return (
    <>
      <Title value="Macos Web" />
      <div className="text-text">Test</div>
      <LoadingScreen />
    </>
  );
};

export default Home;
