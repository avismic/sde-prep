import React, { useState, useEffect } from 'react';
import { initialData } from './data';
import Topic from './components/Topic';
import ProgressBar from './components/ProgressBar';

function App() {
    const [topics, setTopics] = useState({});
    const [difficultyFilter, setDifficultyFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');

    useEffect(() => {
        const savedData = localStorage.getItem('checklistData');
        if (savedData) {
            setTopics(JSON.parse(savedData));
        } else {
            const formattedData = Object.keys(initialData).reduce((acc, key) => {
                acc[key] = initialData[key].map(q => ({ ...q, done: false }));
                return acc;
            }, {});
            setTopics(formattedData);
        }
    }, []);
    
    const handleAddQuestion = (topicTitle, newQuestionText, difficulty) => {
        const newQuestion = {
            text: newQuestionText,
            difficulty: difficulty,
            done: false
        };
        const newTopics = { ...topics };
        newTopics[topicTitle] = [...newTopics[topicTitle], newQuestion];
        setTopics(newTopics);
        localStorage.setItem('checklistData', JSON.stringify(newTopics));
    };

    const handleToggleQuestion = (topicTitle, questionIndex) => {
        const originalQuestion = Object.values(topics).flat().find(q => 
            q.text === filteredTopics[topicTitle][questionIndex].text &&
            q.difficulty === filteredTopics[topicTitle][questionIndex].difficulty
        );

        const newTopics = { ...topics };
        Object.keys(newTopics).forEach(title => {
            newTopics[title] = newTopics[title].map(q => {
                if (q.text === originalQuestion.text && q.difficulty === originalQuestion.difficulty) {
                    return { ...q, done: !q.done };
                }
                return q;
            });
        });

        setTopics(newTopics);
        localStorage.setItem('checklistData', JSON.stringify(newTopics));
    };

    const calculateOverallProgress = () => {
        if (Object.keys(topics).length === 0) return 0;
        let totalQuestions = 0;
        let completedQuestions = 0;
        Object.values(topics).forEach(questions => {
            totalQuestions += questions.length;
            completedQuestions += questions.filter(q => q.done).length;
        });
        return totalQuestions === 0 ? 0 : (completedQuestions / totalQuestions) * 100;
    };

    const filteredTopics = Object.fromEntries(
        Object.entries(topics)
            .map(([title, questions]) => {
                const filteredQuestions = questions.filter(q => {
                    const difficultyMatch = difficultyFilter === 'all' || q.difficulty === difficultyFilter;
                    const statusMatch = statusFilter === 'all' || (statusFilter === 'done' && q.done) || (statusFilter === 'pending' && !q.done);
                    return difficultyMatch && statusMatch;
                });
                return [title, filteredQuestions];
            })
            .filter(([title, questions]) => questions.length > 0)
    );

    return (
        <div className="app-container">
            <h1>LTI Mindtree Prep Checklist 🧑‍💻</h1>
            <ProgressBar value={calculateOverallProgress()} />

            <div className="filter-controls">
                <div className="filter-group">
                    <label htmlFor="difficultyFilter">Filter by Difficulty:</label>
                    <select id="difficultyFilter" value={difficultyFilter} onChange={e => setDifficultyFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label htmlFor="statusFilter">Filter by Status:</label>
                    <select id="statusFilter" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="done">Done</option>
                        <option value="pending">Pending</option>
                    </select>
                </div>
            </div>

            {Object.keys(filteredTopics).map(title => (
                <Topic 
                    key={title}
                    title={title}
                    questions={filteredTopics[title]}
                    onToggleQuestion={handleToggleQuestion}
                    onAddQuestion={handleAddQuestion}
                />
            ))}
        </div>
    );
}

export default App;