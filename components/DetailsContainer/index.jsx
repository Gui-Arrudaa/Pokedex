import styled from 'styled-components';

const DetailsContainer = styled.div`
  padding: 3rem;
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 991.98px) {
    height: auto;
  }

  .pokemon {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    @media screen and (max-width: 991.98px) {
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
    }
  }

  .image-wrapper {
    position: relative;
    width: 400px;
    height: 400px;
    padding: 0.75rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.bg};

    @media screen and (max-width: 501px) {
      width: 300px;
      height: 300px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 50%;

    @media screen and (max-width: 991.98px) {
      max-width: 100%;
    }

    @media screen and (max-width: 580px) {
      width: 100%;
    }
  }

  h1 {
    text-transform: capitalize;

    @media screen and (max-width: 991.98px) {
      text-align: center;
    }
  }

  .numbers {
    display: flex;
    gap: 4rem;

    @media screen and (max-width: 1070px) {
      gap: 2.5rem;
    }

    @media screen and (max-width: 991.98px) {
      gap: 4rem;
    }

    @media screen and (max-width: 580px) {
      flex-direction: column;
      gap: 0.75rem;
    }
  }

  .abilities,
  .types {
    display: inline;

    li {
      display: inline;
      text-transform: capitalize;
    }

    li + li:before {
      content: ', ';
    }

    li:last-child:after {
      content: '.';
    }
  }

  .flex-stats {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      display: flex;
      justify-content: end;
      width: 30%;
      text-transform: capitalize;

      @media screen and (max-width: 501px) {
        font-size: 90%;
        width: 45%;
      }
    }

    progress {
      width: 70%;

      @media screen and (max-width: 501px) {
        font-size: 90%;
        width: 55%;
      }
    }

    progress::-webkit-progress-bar {
      background-color: ${({ theme }) => theme.bg};
      border-radius: 0.2rem;
    }

    progress::-webkit-progress-value {
      background-color: #3393b9;
      border-radius: 0.2rem;
    }
  }

  button.go-back {
    background-color: #3393b9;
    color: white;
    padding: 0.8rem 4rem;
    margin-top: 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: #2a7796;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;

export default DetailsContainer;
