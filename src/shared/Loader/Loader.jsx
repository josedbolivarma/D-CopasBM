import { Triangle } from "react-loader-spinner"

const wrapperStyle = {
    width: '100%',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export const Loader = () => {
  return (
    <div style={{
        textAlign: 'center'
    }}>
        <h2>LOADING...</h2>
    <Triangle
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="triangle-loading"
    wrapperStyle={ wrapperStyle }
    wrapperClassName=""
    visible={true}
    />
    </div>
  )
}
