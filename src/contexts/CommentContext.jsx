import { createContext, useContext, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const CommentContext = createContext();

const useCommentContext = () => useContext(CommentContext);
export default useCommentContext;

export function CommentProvider({ children }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchComments = async (leadId) => {
    try {
      const res = await axiosInstance.get(`/leads/${leadId}/comments`);

      setComments(res.data);
    } catch (error) {
      setError(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const addComment = async (leadId, commentData) => {
    try {
      const res = await axiosInstance.post(
        `/leads/${leadId}/comments`,
        commentData
      );

      setComments((prev) => [...prev, res.data]);
    } catch (error) {
      setError(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CommentContext.Provider
      value={{ comments, loading, error, fetchComments, addComment }}
    >
      {children}
    </CommentContext.Provider>
  );
}
