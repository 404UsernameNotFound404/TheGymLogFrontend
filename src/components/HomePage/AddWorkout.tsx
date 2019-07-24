import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import Workout from "./Workout";
import Exercise from "./Exercise";
import AddExercises from "./AddExercises";

const WorkoutTitle = styled.input`
    font-size: 1.75em;
    margin: 0;
    margin-bottom: 0.5em;
    border: none;
    :focus {
        outline: none;
    }
`;

const WorkoutHistory = styled.div`
    border: rgb(100, 100, 100) thin solid;
    width: 27%;
    padding: 2em 1.5%;
    margin: 2em 1.5%;
`;

function AddWorkout() {
    const [titleInput, setTitleInput] = useState<string>("Title");
    let updateTitle = (event: any) => {
        setTitleInput(event.target.value);
    };
    return (
        <WorkoutHistory>
            <WorkoutTitle value={titleInput} onChange={updateTitle} />
            <AddExercises />
        </WorkoutHistory>
    );
}

export default AddWorkout;
