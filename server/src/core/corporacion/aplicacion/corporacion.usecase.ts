import { GenericoRepository } from "../../../shared/dominio/generico.repository";
import { CorporacionEntity } from "../dominio/corporacion.entity";

export default class CorporacionUseCase {
    constructor(private operacion:GenericoRepository<CorporacionEntity> ) {
        
    }
    getAll(): CorporacionEntity[] {
        return this.operacion.getAll();
    }
    getOne(id: number): CorporacionEntity {
        return this.operacion.getOne( id );
    }
    getByPage(pagina: number): CorporacionEntity[] {
        return this.operacion.getByPage( pagina );
    }
    insert(entidad: CorporacionEntity): CorporacionEntity {
        return this.operacion.insert( entidad );
    }
    update(id: number, entidad: CorporacionEntity): CorporacionEntity {
        return this.operacion.update( id, entidad);
    }
    delete(id: number): CorporacionEntity {
        return this.operacion.delete( id );
    }
}