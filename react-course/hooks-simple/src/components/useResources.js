import { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );

      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

// Alternative with .then
// const ResourceList = ({ resource }) => {
//   const [resources, setResources] = useState([])

//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/${resource}`)
//       .then(({ data }) => setResources(data))
//   }, [resource])

//   return <div>{resources.length}</div>
// }

export default useResources;
