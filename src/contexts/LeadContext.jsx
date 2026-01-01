import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const LeadContext = createContext();

const useLeadContext = () => useContext(LeadContext);
export default useLeadContext;

export function LeadProvider({ children }) {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchLeads(filters = {}) {
    try {
      setLoading(true);
      setError(null);

      const res = await axiosInstance.get("/leads", {
        params: filters,
      });
      setLeads(res.data);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch leads");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <LeadContext.Provider value={{ leads, loading, error, fetchLeads }}>
      {children}
    </LeadContext.Provider>
  );
}
