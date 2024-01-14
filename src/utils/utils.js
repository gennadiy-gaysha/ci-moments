import axios from "axios";

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axios.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, curr) => {
        return acc.some((accResult) => accResult.id === curr.id)
          ? acc
          : [...acc.cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};
