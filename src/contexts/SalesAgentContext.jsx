import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const SalesAgentContext = createContext();

const useSalesAgentContext = () => useContext(SalesAgentContext);
export default useSalesAgentContext;

export function SalesAgentProvider({ children }) {
  const [salesAgents, setSalesAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [createAgentLoading, setCreateAgentLoading] = useState(false);

  const fetchSalesAgents = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axiosInstance.get("/agents");
      setSalesAgents(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const createSalesAgent = async (agentData) => {
    try {
      setCreateAgentLoading(true);

      const res = await axiosInstance.post(`/agents`, agentData);
      setSalesAgents((prev) => [...prev, res.data]);

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message: error?.response?.data?.message,
      };
    } finally {
      setCreateAgentLoading(false);
    }
  };

  const deleteSalesAgent = async (id) => {
    try {
      const res = await axiosInstance.delete(`/agents/${id}`);

      setSalesAgents((prev) => prev.filter((agent) => agent.id !== id));

      return {
        success: true,
        message: res.data?.message,
      };
    } catch (error) {
      console.log(error);

      return {
        success: false,
        message:
          error.response?.data?.message || "Error in deleting sales agent",
      };
    }
  };

  useEffect(() => {
    fetchSalesAgents();
  }, []);

  return (
    <SalesAgentContext.Provider
      value={{
        salesAgents,
        loading,
        error,
        createAgentLoading,
        createSalesAgent,
        deleteSalesAgent,
      }}
    >
      {children}
    </SalesAgentContext.Provider>
  );
}
