import { useState } from "react";

export default function AddResource() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!title || !link) {
      alert("Title and Link are required");
      return;
    }

    // you will replace this with your Spring Boot API call later
    console.log({
      title,
      link,
      description,
      tags: tags.split(",").map(t => t.trim()),
    });

    // clear after submit
    setTitle("");
    setLink("");
    setDescription("");
    setTags("");
  };

  return (
    <div className="max-w-lg mx-auto p-2 sm:p-4 space-y-6">
      <h1 className="text-2xl font-semibold">Add Resource</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-gray-800/60 p-6 border border-gray-700 rounded-xl"
      >

        {/* Title */}
        <div>
          <label className="block text-sm mb-1 text-gray-300">Title *</label>
          <input
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700
                       focus:border-blue-500 outline-none text-sm sm:text-base"
            placeholder="React Roadmap"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Link */}
        <div>
          <label className="block text-sm mb-1 text-gray-300">Link *</label>
          <input
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 
                       focus:border-blue-500 outline-none text-sm sm:text-base"
            placeholder="https://example.com"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm mb-1 text-gray-300">Description</label>
          <textarea
            rows="4"
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700
                       focus:border-blue-500 outline-none text-sm sm:text-base"
            placeholder="Explain what this resource is about..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm mb-1 text-gray-300">
            Tags <span className="text-gray-500">(comma-separated)</span>
          </label>
          <input
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700
                       focus:border-blue-500 outline-none text-sm sm:text-base"
            placeholder="react, spring, java"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700
                     font-semibold text-white transition"
        >
          Submit Resource
        </button>
      </form>
    </div>
  );
}
