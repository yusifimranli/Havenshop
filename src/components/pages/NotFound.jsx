import React from "react";
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-5 text-center">
      <h1 className="text-[120px] font-bold leading-none text-black">
        404
      </h1>

      <h2 className="mt-6 text-2xl font-semibold text-black">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-gray-500">
        Sorry, the page you are looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-8 bg-black px-8 py-4 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
