"use client"

export default function Page({ params }: { params: { repo_name: string } }) {
  const { repo_name } = params
  const username = localStorage.getItem('username-keploy-app-dashboard')

  return (
    <div>
      username: {username}
      My Post: {repo_name}
    </div>
  )
}
