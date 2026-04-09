const Settings = () => {
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Admin Settings
      </h1>

      <div className="bg-white border rounded shadow p-6 max-w-xl">
        <p className="text-gray-700 mb-4">
          Change admin password and manage account settings.
        </p>

        <button className="bg-orange-600 text-white px-6 py-3 rounded">
          Change Password
        </button>
      </div>

    </div>
  );
};

export default Settings;
