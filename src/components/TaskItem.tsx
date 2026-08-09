import React from "react";
import { useState } from "react";

interface TaskItemProps {
  item: string;
  key: number;
  onClose: () => void;
}

const TaskItem = ({ item, key, onClose }: TaskItemProps) => {
  const [check, setCheck] = useState(false);

  return (
    <div>
      <li
        key={key}
        className="list-group-item d-flex justify-content-between align-items-center bg-transparent text-white border-0"
      >
        <div className="d-flex align-items-center gap-2">
          <input
            className="form-check-input me-1 bg-warning"
            type="checkbox"
            value=""
            checked={check}
            onChange={(e) => setCheck(e.target.checked)}
          ></input>
          <span
            className={check ? "text-decoration-line-through fw-light" : ""}
          >
            {item}
          </span>
        </div>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </li>
    </div>
  );
};

export default TaskItem;
