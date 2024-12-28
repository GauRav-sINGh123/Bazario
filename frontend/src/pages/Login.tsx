const Login = () => {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="relative h-[50vh] md:h-screen">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
            alt="Stylish fashion items"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 lg:px-16 xl:px-24">
          <div className="space-y-6 max-w-md mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Log In</h1>
            <p className="text-lg text-gray-600">Welcome back to your style journey</p>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 text-sm font-medium bg-black text-white hover:bg-gray-800 transition-colors duration-300"
              >
                Log In
              </button>
            </form>
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="/signup" className="font-medium text-black hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Login;
  
  