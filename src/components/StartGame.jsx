import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dices" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  min-height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  gap: 24px;

  div > img {
    max-width: 100%;
    height: auto;
    display: block;
    width: 420px;
  }

  .content {
    flex: 1 1 320px;
    h1 {
      font-size: clamp(2.2rem, 6vw, 6rem);
      margin: 0 0 16px 0;
      white-space: normal;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    padding: 40px 16px;
    div > img {
      width: 300px;
    }
  }

  @media (max-width: 480px) {
    div > img {
      width: 220px;
    }
    .content {
      h1 {
        font-size: clamp(1.6rem, 8vw, 2.6rem);
        text-align: center;
      }
      button {
        width: 100%;
      }
    }
  }
`;
