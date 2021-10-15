import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const NotFound = () => {
  const [time, setTime] = useState(5);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  });

  useEffect(() => {
    const timeCount = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timeCount);
    };
  });
  return (
    <div className="notfound box_container flex flex-col justify-center items-center">
      <h3 className="text-7xl select-none">🤔</h3>
      <h1 className="status_code text-9xl text-red-500">404</h1>
      <span className="text-3xl">Page Not Found</span>
      <h5 className="text-2xl text-green-800 font-semibold">
        Redirecting in <span className="text-5xl">{time}</span>
      </h5>
    </div>
  );
};

export default NotFound;
