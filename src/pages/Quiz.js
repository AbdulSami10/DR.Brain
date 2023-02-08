import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizMcqs from "../components/quiz/quizMcqs";
import QuizResult from "../components/quiz/quizResult";
import QuizStart from "../components/quiz/quizStart";
import { quiz } from "../data/content/quiz/quizContent";
import styles from "../styles/quiz.module.css";
import H1 from "../UI/H1/H1";
const Quiz = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      message.open({ type: "error", content: "You are not authorized" });

      navigate("/login");
    } else if (!localStorage.getItem("quiz")) {
      message.open({ type: "error", content: "You are not authorized" });

      navigate("/");
    }
  }, [navigate]);

  const [start, setStart] = useState(true);
  const [result, setResult] = useState(false);
  const [correct, setCorrect] = useState(0);
  let per = (correct / quiz.length) * 100;
  console.log(per);
  return (
    <React.Fragment>
      <div className={styles.main}>
        <H1 className={styles.heading}>Quiz</H1>
        {result ? (
          <QuizResult
            setResult={setResult}
            correct={correct}
            percentage={per.toFixed()}
            setCorrect={setCorrect}
          />
        ) : (
          <>
            {start ? (
              <QuizStart setStart={setStart} />
            ) : (
              <div className={styles.quizMc}>
                <img
                  src="./img/quizMc.jpg"
                  width="340"
                  height="340"
                  alt="quizMCQsImage"
                />
                <QuizMcqs
                  setResult={setResult}
                  correct={correct}
                  setCorrect={setCorrect}
                  percentage={per.toFixed()}
                />
              </div>
            )}
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default Quiz;
