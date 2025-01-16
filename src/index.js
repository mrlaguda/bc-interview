import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import client from './utils/shopifyClient';
import Homepage from "./pages/Homepage";
import './styles/index.css';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        {
          shop {
            name
            description
          }
        }
      `;

      const response = await client.request(query);
      setData(response.data);
    };

    fetchData();
  }, []);

  return data ? <Homepage data={data} /> : null;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
