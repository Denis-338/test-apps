import React from 'react';

import './student-card.css';

const StudentCard = ({ handleChangeInput, handleButtonClick }) => {

    return (
        <div className="card">
            <h5>Сведения о студенте</h5>
            <label>Имя<input type="text" name="name"
                onChange={handleChangeInput} className="form-control" /></label>
            <label>Количество оценок<input type="text" name="totalMarks"
                onChange={handleChangeInput} className="form-control" /></label>
            <label>Пропущенные занятия</label>
            <label>по уважительной причине<input type="text" name="valid"
                onChange={handleChangeInput} className="form-control" /></label>
            <label>по неуважительной причине<input type="text" name="notvalid"
                onChange={handleChangeInput} className="form-control" /></label>
            <button className="btn btn-outline-secondary" onClick={handleButtonClick}>Добавить оценки</button>
        </div>
    );
}

export default StudentCard;
