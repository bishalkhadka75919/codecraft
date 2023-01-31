import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService:JwtService) {}

  async validateUserByLocal(email: string, password: string) {
    let matchFound = false;
    const user = await this.userService.getUser({email});

    if (user) {
      matchFound = await bcrypt.compare(password, user.password);
    }

    if (matchFound) {
      const { password, ...rta } = user.toJSON();
      return rta;
    }
    return null;
  }

    async validateUserByGoogle(accessToken: string, refreshToken: string, profile, done: Function) {
    const { id, emails } = profile;
    const user = await this.userService.findOrCreateUser({
      googleId: id,
      email: emails[0].value,
    });
      done(null, user);
    }

  async login(user:any){
        const payload = { username: user.email, sub: user._id,roles:user.roles };
    return {
      access_token: this.jwtService.sign(payload),
    };

  }
}
