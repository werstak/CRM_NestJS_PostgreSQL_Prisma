// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
const app = await NestFactory.create(AppModule);
const config = new DocumentBuilder()
 .setTitle('CRM')
 .setDescription('The CRM API description')
 .setVersion('1.0')
 .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

await app.listen(3000);
}
bootstrap();