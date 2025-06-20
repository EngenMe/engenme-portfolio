export default function Home() {
  return (
      <div className="p-8">
        <h1 className="text-2xl mb-4">Color Test</h1>

        {/* Test basic colors first */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">
          Basic Blue
        </button>

        {/* Test custom colors */}
        <button className="bg-primary-50 text-primary-900 px-4 py-2 rounded border border-primary-200">
          Custom Primary Light
        </button>

        <button className="bg-primary-600 text-white px-4 py-2 rounded ml-4">
          Custom Primary Dark
        </button>
      </div>
  );
}