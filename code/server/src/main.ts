import {NestFactory} from "@nestjs/core";
import {SwaggerModule, DocumentBuilder} from "@nestjs/swagger";
import {AppModule} from "./app.module";
import "reflect-metadata";

(async () => {
    const app = await NestFactory.create(AppModule, {cors: true});

    const config = new DocumentBuilder().setTitle("Profile").setDescription("The profile API description").setVersion("1.0").addTag("Proflie").build();

    SwaggerModule.setup("api", app, SwaggerModule.createDocument(app, config));

    await app.listen(process.env.PORT);
})()