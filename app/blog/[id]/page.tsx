"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

interface Props {
  params: {
    id: string;
  };
}

interface BlogData {
  _id: string;
  title: string;
  desc?: string;
  image?: string;
}

const BlogDetailPage = ({ params }: Props) => {
  const [data, setData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(`/api/getblog/${params.id}`);
      setData(res.data);
    } catch (err) {
      console.error("Error loading blog:", err);
      setError("Failed to load blog");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-600 text-lg animate-pulse">
        Loading blog...
      </p>
    );

  if (error)
    return (
      <p className="text-center mt-10 text-red-500 font-semibold">{error}</p>
    );

  if (!data)
    return <p className="text-center mt-10 text-gray-500">No blog found.</p>;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 mt-10 max-sm:mt-20 px-[20%] max-sm:px-10 ">
      <div className="">
        {data.image && (
          <img
            src={data.image}
            alt={data.title}
            className="w-[50%]  h-[200px] object-cover mb-4"
          />
        )}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">{data.title}</h1>

        <p className="text-gray-700 leading-relaxed">
          {data.desc ?? "No content available."}
        </p>
      </div>
    </main>
  );
};

export default BlogDetailPage;
