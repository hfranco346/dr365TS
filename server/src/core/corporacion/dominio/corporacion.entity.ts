import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Corporacion' })
export class Corporacion {
	@PrimaryGeneratedColumn()
	corp_nid: number;

	@Column({ type: 'varchar', length: 50 })
	corp_vnombre: string;
}
