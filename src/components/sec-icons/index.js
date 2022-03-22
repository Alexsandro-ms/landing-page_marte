import rocketIcon from "../img/rocket.png";

function Icons({ text }, { icon }) {
  return (
    <>
      <img src={rocketIcon} />
      <h3>{text}</h3>
    </>
  );
}
export default Icons;
