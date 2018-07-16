import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(' ')[0];

    // School List
    const schools = profile.schools.map((school, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" /> {school}
      </div>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <hr />
            <h3 className="text-center text-info">Schools</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {schools}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
