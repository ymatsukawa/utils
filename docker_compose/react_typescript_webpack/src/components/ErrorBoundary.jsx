import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      isrror: true,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <>
          <div>
            <h1>Something went wrong.</h1>
            <div>
              {this.state.errorInfo.componentStack.split("\n").map(
                (error) => {return <p>{error}</p>}
              )}
            </div>
          </div>
        </>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary
