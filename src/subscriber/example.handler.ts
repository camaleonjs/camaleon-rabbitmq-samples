import { IHandler } from 'camaleon-rabbitmq';
import { ExampleMessage } from '../example.message';

export class ExampleHandler implements IHandler<ExampleMessage> {
    name = 'ExampleHandler';
    handle(message: ExampleMessage): Promise<boolean> {
        return new Promise((resolve, reject) => {
            console.log('ExampleHandler: ', message.content);
            resolve(true);
            return true;
        });
    }
}
