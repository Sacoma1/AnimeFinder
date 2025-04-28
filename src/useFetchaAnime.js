import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchAnime = (url) => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setAnime(res.data.data))
      .catch((err) => console.log(err));
  }, [url]);

  return anime;
};
