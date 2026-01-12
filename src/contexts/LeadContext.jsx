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

  async function getLeadById(id) {
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

      setLeads((prev) => [...prev, res.data]);
      return res.data;
    } catch (error) {
      throw error;
    } finally {
      setCreateLeadLoading(false);
    }
  }

  async function updateLeadById(id, data) {
    try {
      const res = await axiosInstance.put(`/leads/${id}`, data);

      fetchLeads();
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async function deleteLead(id) {
    try {
      const res = await axiosInstance.delete(`/leads/${id}`);

      setLeads((prev) => prev.filter((lead) => lead.id !== id));
      return {
        success: true,
        message: res.data.message || "Lead deleted successfully",
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message || "Error in deleting lead by ID",
      };
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
        getLeadById,
        createLead,
        updateLeadById,
        deleteLead,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
}
