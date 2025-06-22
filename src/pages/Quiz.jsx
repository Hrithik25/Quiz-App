import {
  Box,
  Button,
  Divider,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { questions } from "../shared/Questions";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { modeAtom } from "../recoil/atoms/modeAtom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { category } = useParams();
  const [idx, setIdx] = useState(0);
  const questionList = questions[category];
  const len = questionList?.length;
  const mode = useRecoilValue(modeAtom);
  const [userResponse, setUserResponse] = useState("");
  const [isRightAnswer, setIsRightAnswer] = useState(false);
  const [buttonId, setButtonId] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const selectAnswer = (selectedAnswer) => {
    setUserResponse(selectedAnswer);
  };

  const onClickSubmit = () => {
    if (idx === len - 1 && userResponse) {
      setButtonId(2);
    } else if (idx < len - 1 && userResponse) {
      setButtonId(1);
    }
    if (userResponse === questionList[idx]?.answer) {
      setIsRightAnswer(true);
    } else setIsRightAnswer(false);
    if (userResponse === questionList[idx]?.answer) {
      setScore((score) => score + 100);
    }
  };
  const onClickNext = () => {
    setButtonId(0);
    setUserResponse("");
    if (idx < len - 1) {
      setIdx(idx + 1);
    }
  };

  const getBorderColor = (option) => {
    const borderColor =
      userResponse === option ? (mode === "dark" ? "white" : "black") : "";
    return borderColor;
  };
  const getButtonEndIcon = (option) => {
    if (buttonId !== 0) {
      if (userResponse !== questionList[idx]?.answer) {
        if (option === userResponse) {
          return <CancelOutlinedIcon color="error" />;
        } else if (option === questionList[idx]?.answer) {
          return <CheckCircleOutlineIcon color="success" />;
        }
      } else {
        if (option === userResponse) {
          return <CheckCircleOutlineIcon color="success" />;
        }
      }
    }
  };
  return showResult ? (
    <>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4">{"Quiz Result"}</Typography>
        <Divider color="white" />
        <Typography variant="h5">{`${
          score / 100
        }/${len} Questions are correct!`}</Typography>
        <Typography variant="h1">{score}</Typography>
        <Typography variant="h5">{"Points"}</Typography>
        {buttonId === 3 && (
          <Button variant="contained" href="/">
            {"Back To Home"}
          </Button>
        )}
      </Box>
    </>
  ) : (
    <Stack spacing={2}>
      <LinearProgress variant="determinate" value={((idx + 1) / len) * 100} />
      <Typography variant="subtitle2">{`Question ${
        idx + 1
      }/${len}`}</Typography>
      <Typography variant="h5">{questionList[idx]?.que}</Typography>
      {questionList[idx]?.options?.map((option) => (
        <>
          <Button
            variant="outlined"
            sx={{
              borderColor: getBorderColor(option),
              width: "100%",
              justifyContent: "space-between",
              color: mode === "dark" ? "white" : "black",
            }}
            onClick={() => {
              if (buttonId === 0) {
                selectAnswer(option);
              }
            }}
            endIcon={getButtonEndIcon(option)}
          >
            {option}
          </Button>
        </>
      ))}

      {buttonId === 1 ? (
        <Button variant="contained" onClick={() => onClickNext()}>
          {"Next"}
        </Button>
      ) : buttonId === 2 ? (
        <Button
          variant="contained"
          onClick={() => {
            setIdx(0);
            setButtonId(3);
            setUserResponse("");
            setShowResult(true);
          }}
        >
          {"Show Result"}
        </Button>
      ) : (
        <Button variant="contained" onClick={() => onClickSubmit()}>
          {"Submit"}
        </Button>
      )}
    </Stack>
  );
};
export default Quiz;
