"use client";

import axios from "axios";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [tag, setTag] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const CreateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("/api/createblog", {
        title,
        desc,
        image,
        tag,
      });

      if (res.status === 201) {
        alert("Blog created successfully!");
        // Reset form
        setTitle("");
        setDesc("");
        setImage("");
        setTag("");
        // Optionally redirect
        router.push("/admin");
      }
    } catch (error) {
      console.error(error);
      setError("Failed to create blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Blog</h1>

      <form onSubmit={CreateBlog} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Title
          </label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            required
          />
        </div>

        <div>
          <label htmlFor="desc" className="block text-sm font-medium mb-2">
            Description
          </label>
          <Textarea
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter blog description"
            rows={6}
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium mb-2">
            Image URL
          </label>
          <Input
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter image URL"
            required
          />
        </div>

        <div>
          <label htmlFor="tag" className="block text-sm font-medium mb-2">
            Tag
          </label>
          <Input
            id="tag"
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="Enter tag (e.g., Technology)"
            required
          />
        </div>

        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded">{error}</div>
        )}

        <div className="flex gap-4">
          <Button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Blog"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Page;
