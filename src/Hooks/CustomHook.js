import { useEffect, useState } from "react";

const CustomHook = (api) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [api]);

  return [data];
};

export default CustomHook;
