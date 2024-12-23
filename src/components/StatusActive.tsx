export const StatusActive = ({ status }: { status: string}) => {
  let className = ""
  if (status === "active") className = "bg-purple-100 text-purple-800 text-xs font-bold me-2 px-2.5 py-1.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400"
  if (status === "delayed") className = "bg-red-100 text-red-800 text-xs font-bold me-2 px-2.5 py-1.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400"
  if (status === "complete") className = "bg-green-100 text-green-800 text-xs font-bold me-2 px-2.5 py-1.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
  return <span className={className}>{status?.toUpperCase()}</span>
}
