import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { configValidationSchema } from "./config.schema";
import { RecipesModule } from "./recipes/recipes.module";
import { AuthModule } from "./auth/auth.module";
import { AuthMiddleware } from "./auth/middleware/auth.middleware";
import { EventModule } from "./event/event.module";
import { EventMealModule } from "./event-meal/event-meal.module";
import { EventActivityModule } from "./event-activity/event-activity.module";
import { ProductModule } from "./product/product.module";
import { ActivityModule } from "./activity/activity.module";

@Module({
  imports: [
    AuthModule,
    RecipesModule,
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        // const isProduction = configService.get("STAGE") === "prod";
        console.log(configService.get("DB_PASSWORD"));

        return {
          // ssl: isProduction,
          // extra: {
          //   ssl: isProduction ? { rejectUnauthorized: false } : null,
          // },
          type: "postgres",
          autoLoadEntities: true,
          synchronize: true,
          host: configService.get("DB_HOST"),
          port: configService.get("DB_PORT"),
          username: configService.get("DB_USERNAME"),
          password: configService.get("DB_PASSWORD"),
          database: configService.get("DB_DATABASE"),
          entities: [__dirname + "/**/*.entity{.ts,.js}"],
        };
      },
    }),
    EventModule,
    EventMealModule,
    EventActivityModule,
    ProductModule,
    ActivityModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: "*",
      method: RequestMethod.ALL,
    });
  }
}
