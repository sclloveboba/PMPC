import styled from "styled-components";
import { useForm } from "react-hook-form";
import Axios from "axios";
import React, { useState, useEffect } from "react";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const { register, getValues, handleSubmit } = useForm();

  const [user, setUser] = useState();
  const [userPoint, setUserPoint] = useState(0);

  // hahaha

  // 自动抓取localstorage的userId
  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem("userId"));
    if (userName) {
      setUser(userName);
    }
  }, []);

  return (
    <StyledDiv>
      <header>The current userId: {user}</header>
      <header>The current user Reward Point1: {userPoint}</header>

      <div className="container-md text-center">
        <h1>Interactive Mini Games for Kids</h1>
        <p>how to protect ...</p>
      </div>
    </StyledDiv>
  );
};

export default App;
