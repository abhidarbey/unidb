import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteCourse } from '../../university-actions/profileActions';

class Course extends Component {
  onDeleteClick(id) {
    this.props.deleteCourse(id);
  }

  render() {
    const course = this.props.course.map(edu => (
      <tr key={edu._id}>
        <td>{edu.degree}</td>
        <td>{edu.stream}</td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, edu._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Courses</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Degree</th>
              <th>Stream</th>
              <th />
            </tr>
            {course}
          </thead>
        </table>
      </div>
    );
  }
}

Course.propTypes = {
  deleteCourse: PropTypes.func.isRequired
};

export default connect(null, { deleteCourse })(Course);
