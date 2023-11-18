import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'milena',
        password: '',
        database: 'blink_space',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + './migrations/*{.ts,.js}'],
        synchronize: true,
        migrationsRun: true,
        cli: {
          migrationsDir: './migrations',
        },
      }),
  },
];
