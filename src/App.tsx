// import MenuIcon from "@mui/icons-material/Menu";

const App = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Build Faster with{" "}
              <span className="text-blue-600">Tailwind CSS</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Create modern, responsive websites quickly without leaving your
              HTML.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Hero Image"
              className="rounded-xl shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
