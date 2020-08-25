import styled from "styled-components";

import background from "../../assets/images/background.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  a {
    width: 6rem;
    height: 6rem;
  }

  > img:last-of-type {
    width: 17.73rem;
    height: 7.8rem;
    margin: 40px;
  }

  @media (min-width: 1000px) {
    justify-content: space-around;

    a {
      align-self: end;
      margin-top: 3.4rem;
    }

    > img:last-of-type {
      order: 3;
      align-self: flex-end;
      margin: 5px;
      width: 12rem;
      height: 5.3rem;
    }
  }
`;
interface CategoryProps {
  color: string;
}
export const BoxCategory = styled.div<CategoryProps>`
  width: 26.2rem;
  height: 8rem;
  background: #fff;
  border-radius: 25px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  overflow: hidden;

  img {
    height: 91%;
    width: 30%;
  }

  p {
    font-family: Poppins;
    font-size: 3.2rem;
    color: ${(props) => props.color};
  }

  @media (min-width: 700px) {
    align-self: end;
    margin-top: 3rem;
  }
`;
export const BoxQuestion = styled.div`
  width: 63.6rem;
  height: 60.6rem;
  background: #fff;
  border-radius: 25px;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  header {
    width: 100%;
    /* height: 8%; */
    background: #f3f6e7;
    border-radius: 25px 25px 0px 0px;
    margin-bottom: 33px;

    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    align-items: center;

    p {
      font-family: Poppins;
      font-style: normal;
      /* font-weight: bold; */
      font-size: 24px;
      color: #b1b1b1;
    }
  }

  article {
    width: 90%;
    height: 31%;
    margin-bottom: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-family: Poppins;
      color: #6d5317;
      font-size: 24px;
    }
  }

  a {
    width: 96%;
    height: 13%;
    background: #fff;
    border-radius: 25px;
    margin-bottom: 5px;
    align-self: center;
    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Poppins;
    color: #987422;
    font-size: 24px;
    text-decoration: none;

    &:last-of-type {
      margin-bottom: 40px;
    }
  }
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: url(${background}) no-repeat;
  background-position: bottom right 100%;
  background-size: cover;
  z-index: -1;
`;
