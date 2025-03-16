import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!id) {
      setError("Post ID topilmadi.");
      return;
    }

    axios
      .get(`https://nt-devconnector.onrender.com/api/posts/${id}`, {
        headers: { "x-auth-token": token },
      })
      .then((res) => {
        setPost(res.data);
        setText(res.data.text);
      })
      .catch(() => setError("Post topilmadi yoki o‘chirilgan."));
  }, [id]);

  
  async function handleUpdate() {
    try {
      await axios.get(
        `https://nt-devconnector.onrender.com/api/posts${id}`,
        { text },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      alert("Post yangilandi!");
      navigate("/");
    } catch (error) {
      console.error("Postni yangilashda xatolik:", error);
    }
  }
  
  

  async function handleDelete() {
    try {
      await axios.delete(`https://nt-devconnector.onrender.com/api/posts/${id}`, {
        headers: { "x-auth-token": token },
      });
      alert("Post o‘chirildi!");
      navigate("/"); 
    } catch (error) {
      console.error("Postni o‘chirishda xatolik:", error);
    }
  }

  if (error) return <p className="text-red-500">{error}</p>;
  if (!post) return <p>Loading...</p>;

  return (
    <div  className="w-[600px] mx-auto mt-5">
      <h2 className="text-[25px] text-[lightseagreen] font-bold">{post.name}</h2>
      <textarea
        className="w-full border p-2 mt-3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex gap-4 mt-4">
        <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2">
          O‘chirish
        </button>
      </div>
    </div>
  );
};

export default SinglePost;
