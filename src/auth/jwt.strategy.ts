/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Token dolazi iz Authorization headera
      ignoreExpiration: false,
      secretOrKey: 'tajniKljuc', // Ovo mora biti isto kao u auth modulu
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
