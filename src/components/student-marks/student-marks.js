import React from 'react';

import './student-marks.css';

export default class StudentMarks extends React.Component {

    render() {
        const { marks } = this.props;

        return (
            <div className="card">
                <h5>Оценки{marks}</h5>

            </div>
        );
    };
}
