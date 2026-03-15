import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/signup');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    // navigate('/dashboard');
    };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">KeyAuth</h1>
          <p className="text-gray-600">
            Log In to your account
            <br />
            <span className="text-sm">Enter your email below to login to your account</span>
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200 bg-gray-50 hover:bg-white"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200 bg-gray-50 hover:bg-white"
              required
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:ring-4 focus:ring-blue-300"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">Or don't have an account</span>
          </div>
        </div>

        <button
            type="signin"
            onClick={handleLoginClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:ring-4 focus:ring-blue-300"
          >
            Sign In
          </button>

        {/* Terms & Privacy */}
        <p className="text-xs text-center text-gray-500 mt-6">
          By clicking continue, you agree to our{' '}
          <a href="#" className="text-blue-600 hover:underline hover:text-blue-700 transition duration-200">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-600 hover:underline hover:text-blue-700 transition duration-200">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginPage;