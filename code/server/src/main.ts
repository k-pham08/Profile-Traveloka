import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import "reflect-metadata";

async function bootstrap() {
     const app = await NestFactory.create(AppModule);
     const config = new DocumentBuilder().setTitle("Profile").setDescription("The profile API description").setVersion("1.0").addTag("Proflie").build();
     const document = SwaggerModule.createDocument(app, config);
     SwaggerModule.setup("api", app, document);
     await app.listen(process.env.PORT);
}
bootstrap();
