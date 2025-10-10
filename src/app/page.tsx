
export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hey, I&apos;m Dias!
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            I&apos;m a software engineer, open-source creator, and former
            professional chef. I&apos;ve been making websites since 1998 and{' '}
            <span className="text-purple-500 font-medium">writing on this blog</span> for over ten years!
          </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
            Everything on this site is written by me, not AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-500 hover:bg-purple-600 transition-colors duration-200">
              📖 About Me
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              📧 Email Newsletter
            </button>
          </div>
        </section>

        {/* Content Sections */}
        <section className="mt-20 grid md:grid-cols-2 gap-12">
          {/* Notes Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Notes</h2>
              <a href="/notes" className="text-purple-500 hover:text-purple-600 font-medium">See All</a>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Life, music, projects, and everything else.
            </p>
            <div className="space-y-4">
              <a href="#" className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                <h3 className="font-medium text-gray-900 dark:text-white">Year in Review: 2024 into 2025</h3>
              </a>
              <a href="#" className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                <h3 className="font-medium text-gray-900 dark:text-white">Redesign: Version 7.0: Sidebars, light-dark, and Bluesky</h3>
              </a>
              <a href="#" className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                <h3 className="font-medium text-gray-900 dark:text-white">Year in Review: 2023 into 2024</h3>
              </a>
            </div>
          </div>

          {/* Blog Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Blog</h2>
              <a href="/blog" className="text-purple-500 hover:text-purple-600 font-medium">See All</a>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Guides, references, and tutorials.
            </p>
            <div className="space-y-4">
              <a href="#" className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                <h3 className="font-medium text-gray-900 dark:text-white">Enabling Apache ECharts in React for Data Visualization</h3>
              </a>
              <a href="#" className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                <h3 className="font-medium text-gray-900 dark:text-white">Creating a Keyboard Shortcut Hook in React (Deep Dive)</h3>
              </a>
              <a href="#" className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                <h3 className="font-medium text-gray-900 dark:text-white">HTML Tables with Horizontal Scroll and Sticky Headers</h3>
              </a>
            </div>
          </div>
        </section>

        {/* Deep Dives Section */}
        <section className="mt-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Deep Dives</h2>
            <a href="/deep-dives" className="text-purple-500 hover:text-purple-600 font-medium">All Topics</a>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Long-form tutorials on a variety of development topics.
          </p>
        </section>
      </div>
    </main>
  );
}
