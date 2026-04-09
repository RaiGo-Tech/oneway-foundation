const Programs = () => {
  return (
    <div className="p-10">

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Manage Programs
        </h1>
        <button className="bg-orange-600 text-white px-6 py-3 rounded">
          Add Program
        </button>
      </div>

      <div className="bg-white border rounded shadow p-6">
        <p className="text-gray-600">
          Program list will be loaded from database here.
        </p>
      </div>

    </div>
  );
};

export default Programs;
