import { GenericoRepository } from '../../../_compartido/dominio/generico.repository';
import { UsuarioModel } from './usuario.model';

export interface UsuarioRepository extends GenericoRepository<UsuarioModel> {
	getSearch(): Promise<UsuarioModel[]>;
}
