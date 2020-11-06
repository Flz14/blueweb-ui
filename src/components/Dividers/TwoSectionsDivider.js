import styled from "styled-components";
import Fade from "react-reveal/Fade";

const StyledAboutUs = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
  margin-top: 3rem;
  text-align: center;
  align-items: center;
  justify-content: center;

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
      width: 300px;
    }
  }
  .right {
    width: 100%;
  }

  @media (min-width: 720px) {
    flex-direction: row;

    .left {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      img {
        width: 500px;
      }
    }
    .right {
      width: 50%;
    }
  }
`;

const TwoSectionsDivider = ({ leftComponent, rightComponent }) => {
  return (
    <StyledAboutUs>
      <Fade duration={2500} left>
        <div className="left">{leftComponent}</div>
        <div className="right">{rightComponent}</div>
      </Fade>
    </StyledAboutUs>
  );
};

export default TwoSectionsDivider;