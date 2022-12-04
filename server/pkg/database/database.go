package database

import (
	"github.com/rs/zerolog/log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func Init() (db *gorm.DB, err error) {
	dsn := "host=localhost user=drite password=drite dbname=blog port=5432 sslmode=disable"

	db, err = gorm.Open(postgres.Open(dsn))

	if err != nil {
		log.Fatal().Msg("failed to connect database")
		return
	}

	db.AutoMigrate(&Post{})

	return
}
