import React from 'react'
import GitHubRepos from './component/MainRepo'
import { auth } from '@/auth'
import { EnhancedSpinner } from '@/components/Loader'

const page = async () => {
  const session = await auth()
  const username = session?.user?.login ?? ""
  
  console.log(username)

  if (!username) {
    return <EnhancedSpinner />
  }

  return (
    <div>
      {username && <GitHubRepos username={username} />}
    </div>
  )
}

export default page
