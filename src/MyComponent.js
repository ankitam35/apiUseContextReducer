import { useContext, useEffect } from "react";
import { fetchData } from "./api";
import { DataContext } from "./DataContext";

const MyComponent = () => {
  let [state, dispatch] = useContext(DataContext);

  useEffect(() => {
    const fetchDataResponse = async () => {
      try {
        let data = await fetchData(
          "https://jsonplaceholder.typicode.com/todos"
        );
        dispatch({ type: "FETCH_DATA", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: { error } });
      }
    };

    fetchDataResponse();
  }, [dispatch]);

  return (
    <div>
      {state.loading ? (
        <div>Loading...</div>
      ) : state.error ? (
        <div>{state.error}</div>
      ) : (
        <ul>
          {state.data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyComponent;
