import { useState, useEffect, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { StarIcon } from "@chakra-ui/icons";
const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(1);
  const { addFeedback, feedbackEdit } = useContext(FeedbackContext);

  const changeSelected = (rating) => {
    setSelected(rating);
  };

  useEffect(() => {
    select(selected);
  }, [selected, select]);

  // Grab star rating from feedbackEdit as updates
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  // Reset form rating after sending review
  useEffect(() => {
    if (feedbackEdit.edit === false) {
      setSelected(1);
    }
  }, [addFeedback, feedbackEdit.edit]);

  const selectedRating = (rating) => {
    switch (rating) {
      case 1:
        return (
          <>
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(1)}
              color="purple.200"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(2)}
              color="gray.500"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(3)}
              color="gray.500"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(4)}
              color="gray.500"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(5)}
              color="gray.500"
            />
          </>
        );
      case 2:
        return (
          <>
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(1)}
              color="purple.200"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(2)}
              color="purple.200"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(3)}
              color="gray.500"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(4)}
              color="gray.500"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(5)}
              color="gray.500"
            />
          </>
        );
      case 3:
        return (
          <>
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(1)}
              color="purple.200"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(2)}
              color="purple.200"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(3)}
              color="purple.200"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(4)}
              color="gray.500"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(5)}
              color="gray.500"
            />
          </>
        );
      case 4:
        return (
          <>
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(1)}
              color="purple.200"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(2)}
              color="purple.200"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(3)}
              color="purple.200"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(2)}
              color="purple.200"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(5)}
              color="gray.500"
            />
          </>
        );
      case 5:
        return (
          <>
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(1)}
              color="purple.200"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(2)}
              color="purple.200"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(3)}
              color="purple.200"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(4)}
              color="purple.200"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(5)}
              color="purple.200"
            />
          </>
        );

      default:
        return (
          <>
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(1)}
              color="purple.200"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(2)}
              color="gray.500"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(3)}
              color="gray.500"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(4)}
              color="gray.500"
            />
            <StarIcon
              css={{ cursor: "pointer" }}
              onClick={() => changeSelected(5)}
              color="gray.500"
            />
          </>
        );
    }
  };

  return <>{selectedRating(selected)}</>;
};

export default RatingSelect;
