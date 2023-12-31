import axios from "axios";
import { toast } from "react-toastify";
import { setMovies, setMovieDetails } from "../reducers/movieReducers";

export const getPopularMovies = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/v1/movie/popular?page=1`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setMovies(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

// Function to get the details of a post
export const getMovieDetails = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/v1/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(JSON.stringify(response.data.data));
    const data = response.data.data;
    dispatch(setMovieDetails(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getSearchedMovies = (query) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/v1/search/movie?query=${query}&page=1`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setMovies(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
