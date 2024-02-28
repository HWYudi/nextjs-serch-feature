"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");

  const Router = useRouter();
  const SearchParams = useSearchParams();
  const handle = (e) => {
    e.preventDefault();
    Router.push(`/search?search=${search}`);
  };

  return (
    <div className="flex items-center">
      <form onSubmit={handle} className="flex items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-l px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Search
        </button>
      </form>
    </div>
  );
}
