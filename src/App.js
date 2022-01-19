import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";
const App = () => {
  return (
    <FeedbackProvider>
      <Header />
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </FeedbackProvider>
  );
};

export default App;
