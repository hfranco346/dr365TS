import { GenericoRepository } from '../../../compartido/dominio/generico.repository';
import { CorporacionEntity } from './corporacion.entity';

export interface CorporacionRepository extends GenericoRepository<CorporacionEntity> {
	getSearch(): Promise<CorporacionEntity[]>;
}
