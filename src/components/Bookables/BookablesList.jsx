import React, { useState, useReducer, Fragment } from "react";
import { bookables, sessions, days } from "../../static.json";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import reducer from "./reducer";

const initialState = {
  group: "Rooms",
  bookableIndex: 0,
  hasDetails: true,
};

export default function BookablesList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { group, bookableIndex, bookables, hasDetails } = state;
  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const bookable = bookablesInGroup[bookableIndex];
  const groups = [...new Set(bookables.map((b) => b.group))];


  
  // const [group, setGroup] = useState("Kit");
  // const bookablesInGroup = bookables.filter((b) => b.group === group);
  // const [bookableIndex, setBookableIndex] = useState(0);
  // const groups = [...new Set(bookables.map((b) => b.group))];
  // const bookable = bookablesInGroup[bookableIndex];
  // const [hasDetails, setHasDetails] = useState(false);

  function changeGroup(e) {
    dispatch({
      type: "SET_GROUP",
      payload: e.target.value,
    });
  }

  function changeBookable(selectedIndex) {
    dispatch({
      type: "SET_BOOKABLE",
      payload: selectedIndex,
    });
  }

  function nextBookable() {
    dispatch({ type: "NEXT_BOOKABLE" });
  }

  function toggleDetails() {
    dispatch({ type: "TOGGLE_HAS_DETAILS" });
  }

  return (
    <Fragment>
      <div>
        <select value={group} onChange={changeGroup}>
          {groups.map((g) => (
            <option value={g} key={g}>
              {g}
            </option>
        ))}
        </select>

        <ul className="bookables items-list-nav">
          {bookablesInGroup.map((b, i) => (
            <li key={b.id} className={i === bookableIndex ? "selected" : null}>
              <button className="btn" onClick={() => changeBookable(i)}>
                {b.title}
              </button>
            </li>
          ))}
        </ul>
        <p>{/* unchanged button UI */}</p>
      </div>

      {bookable && (
        <div className="bookable-details">
          <div className="item">
            <div className="item-header">
              <h2>{bookable.title}</h2>
              <span className="control">
                <label>
                  <input
                    type="checkbox"
                    checked={hasDetails}
                    onChange={toggleDetails}
                  />
                  Show Details
                </label>
              </span>
            </div>
            <p>{bookable.notes}</p>
            {hasDetails && (
              <div className="item-details">
                <h3>Availability</h3>
                <div className="bookable-availability">
                  <ul>
                    {bookable.days.sort.map((d) => (
                      <li key={d}>{}</li>
                    ))}
                  </ul>
                  <ul>
                    {bookable.sessions.map((s) => (
                      <li key={s}>{}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
}
