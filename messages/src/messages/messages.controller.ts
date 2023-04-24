import { Controller, Get, Post } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
    @Get()
    listMessages() {
        return [
            { id: '1', text: 'First message' },
            { id: '2', text: 'Second message' },
        ];
    }

    @Post()
    createMessage() {
        return {
            id: '3',
            text: 'Third message',
        };
    }       

    @Get('/:id')
    getMessage() {
        return {
            id: '1',
            text: 'First message',
        };
    }
    

}
