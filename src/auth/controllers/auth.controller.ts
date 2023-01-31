import { Controller, Post, UseGuards, Req, Get, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { Roles } from 'shared/decorators/roles.decorator';
import { Role } from 'shared/enums/role.enum';
import { loginDTO } from '../dtos/login.dto';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { AuthService } from '../services/auth.service';
// import { loginDTO } from '../dtos/login.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService:AuthService){}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  // login(@Body() login: loginDTO) {
  //   return login;
  // }
  login(@Req() req: Request) {
    // return req.user;
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @Roles(Role.Admin)
  getProfile(@Req() req: Request) {
    return {"Aut":true};
    // return req.user;
  }

    @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin() {
    // triggers the Google OAuth flow
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req, @Res() res) {
    // handle the Google OAuth callback
  }
}
