import React from "react";

export default function MealDetailPage({ params }) {
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
}
