import { Controller, Post, UseGuards, Req, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { loginDTO } from '../dtos/login.dto';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { AuthService } from '../services/auth.service';
// import { loginDTO } from '../dtos/login.dto';

@Controller('auth')
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
  getProfile(@Req() req: Request) {
    return {"Aut":true};
    // return req.user;
  }
}
