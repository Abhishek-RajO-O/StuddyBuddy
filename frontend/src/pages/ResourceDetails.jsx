import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiClient from "./../services/apiClient";

export default function ResourceDetails() {
  const { id } = useParams();
  const [resource, setResource] = useState(null);

  useEffect(() => {
    async function fetchResource() {
      try {
        const res = await apiClient.get(`/resources/${id}`);
        setResource(res.data);
      } catch (err) {
        console.error("Error fetching resource details:", err);
      }
    }

    fetchResource();
  }, [id]);

  if (!resource) return <p className="text-gray-400 text-center py-10">Loading...</p>;

  return (
    <div className="p-4 max-w-xl mx-auto text-gray-300">
      <h1 className="text-2xl font-bold mb-2">{resource.title}</h1>
      <p className="text-gray-400 mb-4">{resource.description}</p>

      <a
        href={resource.link}
        target="_blank"
        className="text-blue-400 underline mb-4 inline-block"
      >
        Visit Resource →
      </a>

      <div className="bg-gray-800 p-4 rounded-lg mt-4">
        <h2 className="text-xl font-semibold mb-2">Stats</h2>
        <p className="text-gray-400">Reviews: {resource.reviewsCount}</p>
        <p className="text-gray-400">Average Rating: ⭐ {resource.averageRating}</p>
      </div>
    </div>
  );
}
