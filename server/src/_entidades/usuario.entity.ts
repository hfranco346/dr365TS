import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'usuario' })
export class Usuario {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 50 })
	nombre: string;

	@Column({ type: 'varchar', length: 50 })
	correo: string;

	@Column({ type: 'varchar', length: 200 })
	password: string;

	@Column({ type: 'varchar', length: 100 })
	refreshToken: string;

	@Column({ type: 'boolean', default: true })
	activo: boolean;
}
