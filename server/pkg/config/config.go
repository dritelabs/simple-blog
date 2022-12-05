package config

import "github.com/spf13/viper"

type Config struct {
	DBSource          string `mapstructure:"DB_SOURCE"`
	Environment       string `mapstructure:"ENVIRONMENT"`
	GRPCServerAddress string `mapstructure:"GRPC_SERVER_ADDRESS"`
	HTTPServerAddress string `mapstructure:"HTTP_SERVER_ADDRESS"`
}

func LoadConfig(path string) (config Config, err error) {
	viper.SetConfigName("app")
	viper.SetConfigType("env")
	viper.AddConfigPath(path)

	viper.AutomaticEnv()

	if err = viper.ReadInConfig(); err != nil {
		return
	}

	err = viper.Unmarshal(&config)

	return
}
