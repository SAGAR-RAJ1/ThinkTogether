//! Post Idea Form
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./PostIdea.css";

function PostIdea() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/ideas", form, {
        withCredentials: true,
      });

      toast.success("Idea added successfully!");

      setForm({
        title: "",
        description: "",
        image: "",
      });

      navigate("/myIdeas");
    } catch (err) {
      console.error(err);

      toast.error(
        err.response?.data?.message || err.message || "Something went wrong",
      );
    }
  };

  return (
    <div className="container postIdea">
      <h3>ENTER DETAILS</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          rows="10"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        ></textarea>

        <input
          type="text"
          name="image"
          placeholder="Url"
          value={form.image}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default PostIdea;
