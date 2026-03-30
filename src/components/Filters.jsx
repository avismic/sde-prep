import React from "react";

function Filters({
  difficultyFilter,
  setDifficultyFilter,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="filter-controls">
      <div className="filter-group">
        <label htmlFor="difficultyFilter">Filter by Difficulty:</label>
        <select
          id="difficultyFilter"
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="pending">Pending</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;