export default function BlogHeader() {
    return (
      <div className="bg-gradient-to-b from-white to-indigo-400 min-h-[350px] flex flex-col justify-center px-40">
        <nav className="text-gray-500 text-sm flex gap-2">
          <a href="/" className="hover:text-gray-700">Home</a>
          <span>/</span>
          <a href="/blog" className="hover:text-gray-700">Blog</a>
        </nav>
  
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Blog</h1>
  
        <div className="mt-3 flex items-center gap-2">
          <span className="px-3 py-1 text-sm bg-pink-100 text-pink-600 rounded-full shadow-sm border border-pink-300">
            ✨ 19 Articles
          </span>
        </div>
  
        <p className="mt-2 text-gray-700 max-w-lg">
          Blog that helps beginner designers become true unicorns.
        </p>
      </div>
    );
  }
  