import React, { Component } from 'react';

class ProfileCreds extends Component {
  render() {
    const { course } = this.props;

    const eduItems = course.map(edu => (
      <li key={edu._id} className="list-group-item">
        <p>
          <strong>Degree:</strong> {edu.degree}
        </p>
        <p>
          <strong>Stream:</strong> {edu.stream}
        </p>
        <p>
          {edu.description === '' ? null : (
            <span>
              <strong>Description: </strong> {edu.description}
            </span>
          )}
        </p>
      </li>
    ));
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Courses</h3>
          {eduItems.length > 0 ? (
            <ul className="list-group">{eduItems}</ul>
          ) : (
            <p className="text-center">No Courses Listed</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
