const LoadingPage = () => {
    return (
      // <div className="flex h-screen items-center justify-center">
      //   <div className="animate-spin w-12 h-12 rounded-full border-b-2 border-blue-300"></div>
      // </div>

      <div className="flex items-center justify-center min-h-screen bg-blue-950">
      <div className="p-4 bg-gradient-to-tr animate-spin from-blue-300 to-blue-500 via-blue-800 rounded-full">
          <div className="bg-blue-950 rounded-full">
              <div className="w-24 h-24 rounded-full"></div>
          </div>
      </div>
  </div>
    )
  }
  
  export default LoadingPage