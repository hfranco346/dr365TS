import GenericoUseCaseRepository from '../../../compartido/aplicacion/generico-usecase.repository';
import { CorporacionEntity } from '../dominio/corporacion.entity';
import { CorporacionRepository } from '../dominio/corporacion.repository';

export class CorporacionUseCase extends GenericoUseCaseRepository<
	CorporacionEntity,
	CorporacionRepository
> {
	constructor(public operacion: CorporacionRepository) {
		super(operacion);
	}

	async insert(record: Partial<CorporacionEntity>): Promise<CorporacionEntity> {
		const resultado = await this.operacion.insert(record);
		return resultado;
	}

	async getSearch(): Promise<CorporacionEntity[]> {
		const resultados = await this.operacion.getSearch();
		return resultados;
	}
}
