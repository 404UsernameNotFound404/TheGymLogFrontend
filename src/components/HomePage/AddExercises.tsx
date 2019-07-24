import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import Workout from "./Workout";
import Exercise from "./Exercise";
import { number } from "prop-types";

const ExercisesContainer = styled.div``;

const InputsContainer = styled.div`
    width: 100%;
    height: 2em;
    display: flex;
`;

const OneInput = styled.input`
    width: 4em;
    height: 2em;
    margin: auto 0;
    border: none;
    :focus {
        outline-color: black;
    }
`;
const InputTitle = styled.h4`
    font-size: 1em;
    margin: auto 0.5em;
    line-height: 2em;
    height: 2em;
`;

function AddExercises() {
    const [titleInput, setTitleInput] = useState<string>("Title");
    const [Inputs, setInputs] = useState<
        { id: string; value: string; key: number }[]
    >([
        { id: "0", value: "4", key: 0 },
        { id: "1", value: "", key: 1 },
        { id: "2", value: "", key: 2 }
    ]);
    let updateInput = (event: any) => {
        let newInputs: any = Inputs.map(ele => {
            if (ele.id === event.target.name) {
                ele.value = event.target.value;
            }
            return ele;
        });
        console.log(newInputs);
        setInputs(newInputs);
    };
    return (
        <ExercisesContainer>
            {console.log("test")}
            <InputsContainer>
                <InputTitle>Name:</InputTitle>
                <OneInput
                    name="0"
                    value={Inputs[0].value}
                    onChange={updateInput}
                />
                <InputTitle>Sets:</InputTitle>
                <OneInput
                    name="1"
                    value={Inputs[1].value}
                    onChange={updateInput}
                />
                <InputTitle>Reps:</InputTitle>
                <OneInput
                    name="2"
                    value={Inputs[2].value}
                    onChange={updateInput}
                />
            </InputsContainer>
        </ExercisesContainer>
    );
}

export default AddExercises;
