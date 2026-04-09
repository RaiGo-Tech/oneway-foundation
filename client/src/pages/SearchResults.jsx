import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { searchContent, searchContentByCategory, getSearchCategories } from '@/utils/searchData';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [groupedResults, setGroupedResults] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Simulate slight delay for better UX
    const timer = setTimeout(() => {
      const searchResults = searchContent(query);
      const grouped = searchContentByCategory(query);
      setResults(searchResults);
      setGroupedResults(grouped);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [query]);

  // Update document title for SEO
  useEffect(() => {
    if (query) {
      document.title = `Search: ${query} | ONEWAY FOUNDATION`;
    }
  }, [query]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-600">Searching...</p>
        </div>
      </div>
    );
  }

  const categories = getSearchCategories();

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Search Results
          </h1>
          
          {/* Search Input */}
          <form action="/search" method="GET" className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Search for programs, pages, information..."
                className="w-full px-6 py-4 pl-14 text-lg rounded-2xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none shadow-lg"
                autoFocus
              />
              <svg
                className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 px-6 py-2 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Results Count */}
          <p className="mt-4 text-slate-600">
            {results.length === 0 ? (
              'No results found'
            ) : (
              <>
                Found <span className="font-bold text-orange-600">{results.length}</span> result{results.length !== 1 ? 's' : ''} for "<span className="font-semibold">{query}</span>"
              </>
            )}
          </p>
        </div>

        {/* No Results */}
        {results.length === 0 && (
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">No results found</h2>
            <p className="text-slate-600 mb-6">
              We couldn't find anything matching your search. Try different keywords or browse our pages below.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors">
                Home
              </Link>
              <Link to="/programs" className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors">
                Programs
              </Link>
              <Link to="/about" className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors">
                About Us
              </Link>
            </div>
          </div>
        )}

        {/* Results by Category */}
        {results.length > 0 && (
          <div className="space-y-8">
            {categories.map(category => {
              if (!groupedResults[category] || groupedResults[category].length === 0) return null;
              
              return (
                <div key={category} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                  {/* Category Header */}
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                      {category === 'Pages' && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                      {category === 'Programs' && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      )}
                      {category === 'Keywords' && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                      )}
                      {category}
                      <span className="ml-2 px-3 py-1 bg-white/20 rounded-full text-sm">
                        {groupedResults[category].length}
                      </span>
                    </h2>
                  </div>

                  {/* Results List */}
                  <div className="divide-y divide-slate-100">
                    {groupedResults[category].map((result, index) => (
                      <Link
                        key={result.id}
                        to={result.path}
                        className="flex items-start gap-4 p-6 hover:bg-orange-50 transition-colors group"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          category === 'Pages' ? 'bg-blue-100 text-blue-600' :
                          category === 'Programs' ? 'bg-green-100 text-green-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          {category === 'Pages' && (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          )}
                          {category === 'Programs' && (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          )}
                          {category === 'Keywords' && (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                            {result.title}
                          </h3>
                          <p className="text-slate-600 mt-1 line-clamp-2">
                            {result.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {result.keywords.slice(0, 3).map((keyword, i) => (
                              <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg">
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                        <svg className="w-5 h-5 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-12 bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Home', path: '/', icon: '🏠' },
              { name: 'About', path: '/about', icon: 'ℹ️' },
              { name: 'Programs', path: '/programs', icon: '📋' },
              { name: 'Donate', path: '/donate', icon: '❤️' },
              { name: 'Team', path: '/team', icon: '👥' },
              { name: 'Gallery', path: '/gallery', icon: '📷' },
              { name: 'Contact', path: '/contact', icon: '📞' },
              { name: 'Join Us', path: '/join-us', icon: '🤝' },
            ].map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 hover:bg-orange-50 hover:shadow-md transition-all group"
              >
                <span className="text-3xl">{link.icon}</span>
                <span className="font-semibold text-slate-700 group-hover:text-orange-600">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
