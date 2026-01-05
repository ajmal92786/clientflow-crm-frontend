import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const LeadContext = createContext();

const useLeadContext = () => useContext(LeadContext);
export default useLeadContext;

export function LeadProvider({ children }) {
  const [leads, setLeads] = useState([]);
  const [leadDetails, setLeadDetails] = useState(null);

  const [leadsLoading, setLeadsLoading] = useState(true);
  const [leadDetailsLoading, setLeadDetailsLoading] = useState(true);
  const [createLeadLoading, setCreateLeadLoading] = useState(false);

  const [leadsError, setLeadsError] = useState(null);
  const [leadDetailsError, setLeadDetailsError] = useState(null);

  async function fetchLeads(filters = {}) {
    try {
      setLeadsLoading(true);
      setLeadsError(null);

      const res = await axiosInstance.get("/leads", {
        params: filters,
      });
      setLeads(res.data);
    } catch (error) {
      setLeadsError(error.response?.data?.message || "Failed to fetch leads");
    } finally {
      setLeadsLoading(false);
    }
  }

  async function fetchLeadById(id) {
    try {
      setLeadDetailsLoading(true);
      setLeadDetailsError(null);

      const res = await axiosInstance.get(`/leads/${id}`);

      setLeadDetails(res.data);
    } catch (error) {
      setLeadDetailsError(
        error.response?.data?.message || "Failed to fetch lead details"
      );
    } finally {
      setLeadDetailsLoading(false);
    }
  }

  async function createLead(leadDetails) {
    try {
      setCreateLeadLoading(true);
      const res = await axiosInstance.post(`/leads`, leadDetails);
      return res.data;
    } catch (error) {
      throw error;
    } finally {
      setCreateLeadLoading(false);
    }
  }

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <LeadContext.Provider
      value={{
        leads,
        leadsLoading,
        leadsError,
        leadDetails,
        leadDetailsLoading,
        leadDetailsError,
        createLeadLoading,
        fetchLeads,
        fetchLeadById,
        createLead,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
}
