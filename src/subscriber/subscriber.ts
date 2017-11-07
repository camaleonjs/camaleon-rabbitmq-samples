import { ExampleHandler } from './example.handler';
import { ExampleMessage } from '../example.message';
import { BrokerStartup, IHandler } from 'camaleon-rabbitmq';

const brokerAddress = process.env.BROKER_ADDRESS || 'amqp://guest:guest@localhost:5672';
const exchangeName = 'example-message';
const broker = new BrokerStartup(
    brokerAddress, exchangeName, new ExampleHandler());

broker.Run();
