import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 220px;
  text-align: center;
  h1 {
    font-size: clamp(2rem, 8vw, 5.5rem);
    line-height: 1;
    margin: 0;
  }
  p {
    font-size: clamp(1rem, 2.6vw, 1.4rem);
    font-weight: 500;
    margin-top: 8px;
  }
`;
