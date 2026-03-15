import { useNavigate } from 'react-router-dom';

const UserProfilePage = () => {
  // Sample user data - in real app, this would come from your auth context/state
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-800">MyApp</div>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] active:scale-[0.98] focus:ring-4 focus:ring-blue-300"
                onClick={handleLogout}
              >
                Logout
              </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Welcome Name at Top Left Below Navbar */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome, <span className="text-blue-600">{user.name}</span>
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* Profile Content */}
          <div className="p-6 space-y-6">
            {/* Email Section */}
              <label className="block text-sm font-medium text-gray-500 mb-2">Email Address</label>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg"></div>
                <p className="text-lg text-gray-900">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;