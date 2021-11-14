import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "./components/Button";
import { Quiz } from "./components/Quiz";
import {next, reset ,test_count_add} from "./store/modules/score";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  max-width: 360px;
  margin: auto;
  text-align: center;
`;

const SubHeader = styled.h2`
  font-size: 1.1em;
  color: #b1a6a6;
  font-weight: 400;
  margin: 35px 0px
`;

const MaingImg = styled.img`
  width: inherit;
  margin: 35px 0px
;
`

const Score = styled.div`
  font-size: 4em;
  color: red;
`;

const BottomCount = styled.div`
  display: inline-block;
  margin: 50px;
`;

function shuffle(array) {
  array.sort(() => Math.random() - 0.5).slice(0, 9);
}

function App() {
  const page = useSelector(state => state.score.page);
  const score = useSelector(state => state.score.score);
  const quizs = useSelector(state => state.score.quizs);
  const test_count = useSelector(state => state.score.test_count);
  const disPatch = useDispatch();

  return (
    <>
      {page === 0 && (
          <Main>
            <MaingImg src={"/photo/runningmanMain.png"} alt={"seoulNight"}/>
            <h1>런닝맨 상식 퀴즈</h1>
            <SubHeader>런닝맨만 봤다면 누구든 만점에 도전할수있는 문제!!</SubHeader>
            <Button text="테스트 시작" clickEvent={() => {
              disPatch(next());
              shuffle(quizs);
              disPatch(test_count_add());
            }} flow={"main"}/>
            <BottomCount>{test_count}명이 참여하였습니다.</BottomCount>
          </Main>
      )}
      {page > 0 && page <= quizs.length && (
        <Main>
          <Quiz />
        </Main>
      )}
      {page > quizs.length && (
        <Main>
          <h1>점수는!!!</h1>
          <Score>{score}점</Score>
          <SubHeader></SubHeader>
          <Button text={"다시하기"} clickEvent={ ()=> {
            disPatch(reset());
          }} flow={"main"}/>
        </Main>
      )}
    </>
  );
}

export default App;
