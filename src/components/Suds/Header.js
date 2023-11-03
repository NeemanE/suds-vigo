import React from "react";

export default function Header() {
  return (
    <div className="bg-gray-800 text-white p-3">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
          <p className="text-xs sm:text-sm">
            <span className="font-bold">Address:</span> 123 Business Ave, Suite
            456
          </p>
          <p className="text-xs sm:text-sm">
            <span className="font-bold">Phone:</span> (123) 456-7890
          </p>
          <p className="text-xs sm:text-sm">
            <span className="font-bold">Email:</span> contact@example.com
          </p>
        </div>
        <div className="mt-3 sm:mt-0">
          {/* Any additional elements like buttons or social links can go here */}
        </div>
      </div>
    </div>
  );
}
