import axios from "axios";
import useSwr from "swr";

const fetcher = async (url) => {
  const {
    data: { totalViews },
  } = await axios.get(url);
};

const useGetViews = (customID, totalViews) => {
  const url = `/api/views${customID}`;
  const config = {
    fallbackData: totalViews,
  };
  return useSwr(url, fetcher, config);
};

export default useGetViews;
