import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/university/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
      <Link to="/university/add-courses" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1" />
        Add Courses
      </Link>
    </div>
  );
};

export default ProfileActions;
