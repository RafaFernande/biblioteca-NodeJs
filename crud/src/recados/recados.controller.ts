import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
    @Get()
    findAll(){
        return 'Essa rota retorna todos os recados'
    }

    @Get(':id')
    findOne(@Param('id') id: any){
        return `Essa rota irá encontra o recado ${id}`
    }

    @Post('cadastrar')
    create(@Body() body: any){
        console.log(body)
        return `Essa rota cria um recado`
    }
}
