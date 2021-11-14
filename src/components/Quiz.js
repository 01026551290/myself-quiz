import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "./Button";
import { Progress } from "./Progress";
import { check, next } from "../store/modules/score";
import styled from "styled-components";

const MaingImg = styled.img`
  width: inherit;
  margin: 35px 0px
;
`

export function Quiz () {
    const disPatch = useDispatch();
    const quiz = useSelector(state => state.score.quizs);
    const page = useSelector(state => state.score.page);

    console.log(quiz);

    return (
        <>
            <h1>{quiz[page -1].q}</h1>
            {quiz[page -1].img && <MaingImg src={quiz[page -1].img} alt={quiz[page -1].text}/> }
            {quiz[page -1].a.map(item => {
                return (
                    <Button text={item.text} key={item.text} clickEvent={() => {
                        disPatch(check({isCorrect: item.correct}));
                        disPatch(next());
                    }} flow={"quiz"}/>
                )
            })}
            <Progress page={page} maxPage={quiz.length}/>
        </>
    )
}