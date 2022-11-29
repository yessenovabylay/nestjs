import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Post('registration')
    async registration(@Body() dto:any) {
        return "HELLO"
    }

    // @Post('login')
    // async login(@Body() dto: AuthDTO)
}
