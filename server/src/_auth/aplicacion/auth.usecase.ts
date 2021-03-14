import { Tokens } from '../../_compartido/infraestructura/token';
import { IToken } from '../../_compartido/dominio/token.interface';
import { UsuarioModel } from '../../core/usuarios/dominio/usuario.model';
import { CryptService } from '../../_compartido/aplicacion/crypt.service';
import { UsuarioRepository } from '../../core/usuarios/dominio/usuario.repository';

export class AuthUseCase {
	constructor(public operacion: UsuarioRepository) {}

	async login(user: Partial<UsuarioModel>): Promise<IToken> {
		const existsUser = await this.operacion.getOne({ correo: user.correo }, [
			'roles',
		]);
		if (existsUser) {
			const matchedPassword = await CryptService.decrypt(
				user.password,
				existsUser.password
			);
			if (matchedPassword) {
				const tokens: IToken = {
					accessToken: Tokens.generateAccessToken(existsUser),
					// refreshToken: existsUser.refreshToken,
				};

				return tokens;
			} else {
				return null;
			}
		} else {
			return null;
		}
	}
}
