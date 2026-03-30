import { useState, useEffect } from "react";
import { initialData } from "../data";

export function useProgress(isLoggedIn) {
  const [topics, setTopics] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return; // 🚫 stop if not logged in

    const formattedData = Object.keys(initialData).reduce((acc, key) => {
      acc[key] = initialData[key].map((q) => ({ ...q, done: false }));
      return acc;
    }, {});

    setTopics(formattedData);

    fetch(`http://elevenmen.in/api/get-progress`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedTopics = { ...formattedData };

        data.forEach((item) => {
          if (updatedTopics[item.topic]) {
            updatedTopics[item.topic] = updatedTopics[item.topic].map((q) => {
              if (q.text === item.question) {
                return { ...q, done: item.done === 1 };
              }
              return q;
            });
          }
        });

        setTopics(updatedTopics);
      })
      .catch((err) => console.error(err));
  }, [isLoggedIn]);

  const toggleQuestion = (topicTitle, questionIndex, filteredTopics) => {
    const originalQuestion = Object.values(topics)
      .flat()
      .find(
        (q) =>
          q.text === filteredTopics[topicTitle][questionIndex].text &&
          q.difficulty === filteredTopics[topicTitle][questionIndex].difficulty,
      );

    const newTopics = { ...topics };

    Object.keys(newTopics).forEach((title) => {
      newTopics[title] = newTopics[title].map((q) => {
        if (
          q.text === originalQuestion.text &&
          q.difficulty === originalQuestion.difficulty
        ) {
          return { ...q, done: !q.done };
        }
        return q;
      });
    });

    setTopics(newTopics);
    const toggledQuestion = filteredTopics[topicTitle][questionIndex];

    fetch("http://elevenmen.in/api/save-progress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        topic: topicTitle,
        question: toggledQuestion.text,
        done: !toggledQuestion.done,
      }),
    });
  };

  return {
    topics,
    setTopics,
    toggleQuestion,
  };
}
