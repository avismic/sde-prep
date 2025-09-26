import React, { useState } from 'react';

const Topic = ({ title, questions, onToggleQuestion, onAddQuestion }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [newQuestionText, setNewQuestionText] = useState('');
    const [newQuestionDifficulty, setNewQuestionDifficulty] = useState('Easy');

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleAddSubmit = (e) => {
        e.preventDefault();
        if (newQuestionText.trim() === '') return;
        onAddQuestion(title, newQuestionText, newQuestionDifficulty);
        setNewQuestionText('');
    };

    return (
        <div className="topic-section">
            <div className="topic-header" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <span className="toggle-icon">{isCollapsed ? '+' : '-'}</span>
            </div>
            {!isCollapsed && (
                <>
                    <ul className="topic-questions">
                        {questions.map((q, index) => (
                            <li key={index} className={`question-item ${q.done ? 'completed' : ''}`}>
                                <input 
                                    type="checkbox" 
                                    checked={q.done}
                                    onChange={() => onToggleQuestion(title, index)}
                                />
                                <span className="question-text">{q.text}</span>
                                <span className={`difficulty difficulty-${q.difficulty}`}>{q.difficulty}</span>
                            </li>
                        ))}
                    </ul>
                    <form onSubmit={handleAddSubmit} className="add-item-form">
                        <input
                            type="text"
                            placeholder="Add new question..."
                            value={newQuestionText}
                            onChange={(e) => setNewQuestionText(e.target.value)}
                        />
                        <select
                            value={newQuestionDifficulty}
                            onChange={(e) => setNewQuestionDifficulty(e.target.value)}
                        >
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                        <button type="submit" className="btn-add">Add</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Topic;