import React, { useState } from "react";
import Topic from "./components/Topic";
import ProgressBar from "./components/ProgressBar";
import AuthForm from "./components/AuthForm";
import { useAuth } from "./hooks/useAuth";
import { useProgress } from "./hooks/useProgress";
import Filters from "./components/Filters";
import Header from "./components/Header";

function App() {
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const { isLoggedIn, loading, error, loginOrSignup, logout } = useAuth();
  const { topics, setTopics, toggleQuestion } = useProgress(isLoggedIn);

  const [authMode, setAuthMode] = useState("login"); // 'login' or 'signup'
  const [authData, setAuthData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleAuth = () => {
    loginOrSignup(authMode, authData);

    setAuthData({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleAddQuestion = (topicTitle, newQuestionText, difficulty) => {
    const newQuestion = {
      text: newQuestionText,
      difficulty: difficulty,
      done: false,
    };
    const newTopics = { ...topics };
    newTopics[topicTitle] = [...newTopics[topicTitle], newQuestion];
    setTopics(newTopics);
  };

  const calculateOverallProgress = () => {
    if (Object.keys(topics).length === 0) return 0;
    let totalQuestions = 0;
    let completedQuestions = 0;
    Object.values(topics).forEach((questions) => {
      totalQuestions += questions.length;
      completedQuestions += questions.filter((q) => q.done).length;
    });
    return totalQuestions === 0
      ? 0
      : (completedQuestions / totalQuestions) * 100;
  };

  const filteredTopics = Object.fromEntries(
    Object.entries(topics)
      .map(([title, questions]) => {
        const filteredQuestions = questions.filter((q) => {
          const difficultyMatch =
            difficultyFilter === "all" || q.difficulty === difficultyFilter;
          const statusMatch =
            statusFilter === "all" ||
            (statusFilter === "done" && q.done) ||
            (statusFilter === "pending" && !q.done);
          return difficultyMatch && statusMatch;
        });
        return [title, filteredQuestions];
      })
      .filter(([title, questions]) => questions.length > 0),
  );
  return (
    <div className="app-container">
      {!isLoggedIn && (
        <AuthForm
          authMode={authMode}
          setAuthMode={setAuthMode}
          authData={authData}
          setAuthData={setAuthData}
          handleAuth={handleAuth}
          loading={loading}
          error={error}
        />
      )}

      {isLoggedIn && (
        <>
          <Header logout={logout} progress={calculateOverallProgress()} />

          <Filters
            difficultyFilter={difficultyFilter}
            setDifficultyFilter={setDifficultyFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />

          {Object.keys(filteredTopics).map((title) => (
            <Topic
              key={title}
              title={title}
              questions={filteredTopics[title]}
              onToggleQuestion={(title, index) =>
                toggleQuestion(title, index, filteredTopics)
              }
              onAddQuestion={handleAddQuestion}
            />
          ))}
        </>
      )}
    </div>
  );
}
export default App;
