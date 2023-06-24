import React from "react";
import "./App.css";
import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Link} from "react-router-dom";
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";

import BookablesPage from "./components/Bookables/BookablesPage";
import BookingsPage from "./components/Bookings/BookingsPage";
import UsersPage from "./components/Users/UsersPage";
import UserPicker from "./components/Users/UserPicker";

let history = createBrowserHistory()

export default function App() {

  return (
    <HistoryRouter history={history}>
      <div className="App">
        <header className="top-list">
          <nav className="nav-items">
            <ul>
              <li>
                <Link to="/bookings" className="btn btn-header">
                  <FaCalendarAlt className="nav-icon" />
                  <span>Bookings</span>
                </Link>
              </li>
              <li>
                <Link to="/bookables" className="btn btn-header">
                  <FaDoorOpen className="nav-icon"   />
                  <span>Bookable</span>
                </Link>
              </li>
              <li>
                <Link to="/users" className="btn btn-header">
                  <FaUsers className="nav-icon"  />
                  <span>Users</span>
                </Link>
              </li>
            </ul>
          </nav>
          <UserPicker />
        </header>
        <Routes>
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/bookables" element={<BookablesPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </HistoryRouter>
  );
}
