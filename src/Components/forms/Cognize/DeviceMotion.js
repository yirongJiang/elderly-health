import { DeviceMotion } from 'react-fns'
const DeviceMotionTest = (props) => {
  const arr1 =props.arr1
  return (<DeviceMotion
    render={({ alpha, beta, gamma, absolute }) => (
      // <pre>{JSON.stringify({ alpha, beta, gamma, absolute }, null, 2)}</pre>
      arr1.push(JSON.stringify({ beta, alpha, gamma }))
    )}
  />)

}




export default DeviceMotionTest;
