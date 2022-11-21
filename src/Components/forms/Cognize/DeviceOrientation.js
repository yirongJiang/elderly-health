import { DeviceOrientation } from "react-fns";

const DeviceOrientationTest = (props) => {
  const arr = props.arr
  return(
    <DeviceOrientation
      render={({ alpha, beta, gamma, absolute }) => (
        // <pre>{JSON.stringify({ alpha, beta, gamma, absolute },null,2)}</pre>
        // console.log(JSON.stringify({ beta, alpha, gamma }))
        arr.push(JSON.stringify({ beta, alpha, gamma }))
      )}
    />)
}

export default DeviceOrientationTest;
