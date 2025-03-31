"use client"

export default function Page({ params }: { params: { repo_name: string } }) {
  const { repo_name } = params
  return <div>My Post: {repo_name}</div>
}
