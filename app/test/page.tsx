"use client";
import React, { useState } from "react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <header className="bg-white dark:bg-zinc-800 shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Blog</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Featured Post</h2>
          <div className="bg-white dark:bg-zinc-800 shadow rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/1200x600"
              alt="Featured Post"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Post Title</h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis...
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-4">Recent Posts</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-zinc-800 shadow rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/400x300"
                alt="Post 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Post Title 1</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read more
                </a>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 shadow rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/400x300"
                alt="Post 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Post Title 2</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read more
                </a>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-800 shadow rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/400x300"
                alt="Post 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Post Title 3</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white dark:bg-zinc-800 shadow mt-8">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2023 My Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
