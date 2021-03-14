import { createConnection } from 'typeorm';
import yenv from 'yenv';
export interface IDatabaseBootstrap {
	initialize(): Promise<any>;
	getConnection(): any;
}
const env = yenv();

let client: any;

export class DatabaseBootstrap implements IDatabaseBootstrap {
	async initialize() {
		const promise = new Promise((resolve, reject) => {
			const parametersConnection = {
				host: env.DATABASE.POSTGRES.HOST,
				type: env.DATABASE.POSTGRES.TYPE,
				username: env.DATABASE.POSTGRES.USERNAME,
				password: env.DATABASE.POSTGRES.PASSWORD,
				database: env.DATABASE.POSTGRES.DATABASE,
				port: env.DATABASE.POSTGRES.PORT,
				entities: [env.DATABASE.POSTGRES.ENTITIES],
				synchronize: env.DATABASE.POSTGRES.SYNCHRONIZE,
			};

			createConnection(parametersConnection).then(
				connection => {
					console.log('Connected to database');
					client = connection;
					resolve(true);
				},
				error => {
					reject(error);
				}
			);
		});

		await promise;
	}

	getConnection(): any {
		return client;
	}
}
