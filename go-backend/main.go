package main

import (
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"gthub.com/MishraShardendu22/go-backend/database"
)

func main() {
	fmt.Println("This is My GSOC Project")
	MONGODB_URI := os.Getenv("MONGODB_URI")
	database.ConnectToDatabase(MONGODB_URI)

	app := fiber.New()

	if os.Getenv("ENVIRONMENT") == "development" {
		LoadEnv()
	}

	SETUP_CORS(app)

	app.Listen(":" + os.Getenv("PORT"))
}

func SETUP_CORS(app *fiber.App) {
	app.Use(cors.New(cors.Config{
		AllowOrigins:     "*",
		AllowCredentials: true,
		AllowMethods:     "GET,POST,PUT,DELETE,PATCH,OPTIONS",
		AllowHeaders:     "Origin, Content-Type, Accept, Authorization",
	}))
}

func LoadEnv() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}
}