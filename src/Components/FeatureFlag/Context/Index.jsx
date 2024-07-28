import { createContext, useState, useEffect } from "react";
import FeatureFlagDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

function FeatureFlagGlobalState({ children }) {
  
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  async function GetData() {
    try {
      setLoading(true);
      const response = await FeatureFlagDataServiceCall();
      setData(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
        <FeatureFlagContext.Provider value={{ loading ,data }}>
          {children}
        </FeatureFlagContext.Provider>
    </div>
  );
}

export default FeatureFlagGlobalState;
