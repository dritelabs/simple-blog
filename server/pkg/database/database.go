package database

import (
	"github.com/drite/simple-blog/pkg/config"
	"github.com/rs/zerolog/log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func Init(c config.Config) (db *gorm.DB, err error) {
	db, err = gorm.Open(postgres.Open(c.DBSource))

	if err != nil {
		log.Fatal().Msg("failed to connect database")
		return
	}

	db.AutoMigrate(&Post{})

	return
}
