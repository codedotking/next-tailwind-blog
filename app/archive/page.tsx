import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive",
};

export default function Archive() {
  return (
    <div className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-4 mx-auto max-w-md">
      <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
        Archive List
      </h2>
      <ul className="mt-4">
        <li className="border-b border-zinc-200 dark:border-zinc-600 py-2 flex items-center justify-between">
          <span className="text-zinc-700 dark:text-zinc-300">Item 1</span>
          <span className="text-zinc-500 dark:text-zinc-400">Jan 2022</span>
        </li>
        <li className="border-b border-zinc-200 dark:border-zinc-600 py-2 flex items-center justify-between">
          <span className="text-zinc-700 dark:text-zinc-300">Item 2</span>
          <span className="text-zinc-500 dark:text-zinc-400">Dec 2021</span>
        </li>
        <li className="border-b border-zinc-200 dark:border-zinc-600 py-2 flex items-center justify-between">
          <span className="text-zinc-700 dark:text-zinc-300">Item 3</span>
          <span className="text-zinc-500 dark:text-zinc-400">Nov 2021</span>
        </li>
      </ul>
    </div>
  );
}
