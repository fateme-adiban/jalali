import React, { useEffect } from "react"
import { NavLink, Route, Routes } from "react-router-dom"

import ProEdit from "./ProEdit"
import ProChat from "./ProChat"

function ProProfile() {
  return (
    <>
      <div class="container py-md-5">
        <h3>
          <img className="avatar-small" src="profile.jpg"></img>
          امیرجلالی بیدگلی
        </h3>

        <div className="profile-nav nav nav-tabs pt-2 mb-4">
          <NavLink to="" end className="nav-item nav-link">
            حساب کاربری
          </NavLink>
          <NavLink to="messages" className="nav-item nav-link">
            پیام ها
          </NavLink>
          <NavLink to="program" className="nav-item nav-link">
            افزودن برنامه
          </NavLink>
        </div>

        <Routes>
          <Route path="" element={<ProEdit />} />
          <Route path="messages" element={<ProChat />} />
          {/* <Route path="program" element={<ProProgram />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default ProProfile
