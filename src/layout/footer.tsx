import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 ">
      <div className="mx-auto max-w-5xl px-6 lg:px-12 py-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Made with <span className="text-red-500">❤️</span> by Dias Norman
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer