import { FC, useEffect } from "react";
import { formatDate } from "@/shared/formatDate";

let date = formatDate();

const Date: FC = () => {
  useEffect(() => {
    setInterval(() => {
      date = formatDate();
    }, 5000);
  }, []);
  return <div className="text-white ml-2">{date}</div>;
};

export default Date;
