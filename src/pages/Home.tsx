import { FC, useEffect, useState } from "react";
import Title from "../components/Title";

const Home: FC = () => {
  const [loadingScreen, setLoadingScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(true);
    }, 1500);
  }, []);

  return (
    <>
      <Title value="Macos Web" />
      <div className="text-text">Test</div>
    </>
  );
};

export default Home;
