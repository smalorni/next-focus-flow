//renders our homepage

export default function Home() {
  return (
    <div className="bg-white">
      <div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Simplified Your Photography Workflow
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-00">
            Streamline your photography business with our all-in-one app. 
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="border-2 border-blue-950 rounded-md bg-[#1a1c1e] px-3.5 py-2.5 text-md font-medium text-white hover:bg-[#1b74e3]">
                Log In
              </a>
              <a href="#" className="text-md font-medium text-[#1a1c1e] px-3.5 py-2.5 border-2 border-blue-950 rounded-md hover:bg-[#1b74e3] hover:text-white" >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}