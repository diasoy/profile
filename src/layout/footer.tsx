import React from 'react'

const Footer = () => {
  return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="mx-auto max-w-7xl px-4 py-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} dias.dev. All rights reserved.
            </p>
          </div>
        </footer>
  )
}

export default Footer