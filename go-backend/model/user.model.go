package model

import "time"

type User struct {
	Name         string    `json:"name"`
	Email        string    `json:"email"`
	Username     string    `json:"login"`
	Blog         string    `json:"blog"`
	Bio          string    `json:"bio"`
	Company      string    `json:"company"`
	Location     string    `json:"location"`
	Followers    int       `json:"followers"`
	Following    int       `json:"following"`
	Repo         string    `json:"repos_url"`
	Image        string    `json:"avatar_url"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
	PublicRepos  int       `json:"public_repos"`
	Twitter      string    `json:"twitter_username"`
	Subscription string    `json:"subscriptions_url"`
	Organisation string    `json:"organizations_url"`
}
