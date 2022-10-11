import BeatLoader from "react-spinners/BeatLoader";

const override = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Loading = ({ loading }) => {
  return <BeatLoader color="blue" loading={loading} cssOverride={override} />;
};

export default Loading;
