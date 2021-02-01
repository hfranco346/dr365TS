import { GenericoRepository } from "../../../shared/dominio/generico.repository";
import { CorporacionEntity } from "../dominio/corporacion.entity";
import mockCorporacion from "../mocks/corporacion.json"
export class CorporacionOperation implements GenericoRepository<CorporacionEntity> {
    getAll(): CorporacionEntity[] {
        const list: CorporacionEntity[] = mockCorporacion;
		return list;
    }
    getOne(id: number): CorporacionEntity {
        const corporacion: CorporacionEntity = mockCorporacion[0];
        return corporacion
    }
    getByPage(pagina: number): CorporacionEntity[] {
        const corporacion: CorporacionEntity[] = mockCorporacion.slice(0, 2);
		return corporacion;
    }
    insert(entidad: CorporacionEntity): CorporacionEntity {
        throw new Error("Method not implemented.");
    }
    update(id: number, entidad: CorporacionEntity): CorporacionEntity {
        throw new Error("Method not implemented.");
    }
    delete(id: number): CorporacionEntity {
        throw new Error("Method not implemented.");
    }
}