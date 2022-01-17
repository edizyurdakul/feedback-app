import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    console.log(id);
  };

  return (
    <>
      <Header />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  );
};

export default App;
