import React from "react";

// Placeholder supporters, replace with real data later
const supporters = [
  {
    name: "Vaibhav Agarwal",
    amount: 2500,
    img: "/images/donors/donor1.jpg"
  },
  {
    name: "Ananya Rao",
    amount: 1000,
    img: "/images/donors/donor2.jpg"
  },
  {
    name: "Sanchit Mehta",
    amount: 500,
    img: "/images/donors/donor3.jpg"
  }
];

export default function RecentSupporters() {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
        {supporters.map((s, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white rounded-xl shadow hover:shadow-md transition duration-200 px-6 py-5"
          >
            <img
              src={s.img}
              alt={s.name}
              className="h-16 w-16 rounded-full object-cover mb-3 border-2 border-primary-200"
              onError={e => { e.target.src = '/images/donors/default.jpg'; }}
            />
            <div className="text-primary-700 font-semibold text-lg">{s.name}</div>
            <div className="text-secondary-500 text-sm mt-1">
              Donated <span className="font-bold">₹{s.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}