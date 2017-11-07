import { ExampleHandler } from 'camaleon-rabbitmq';
import { ExampleMessage } from './example.message';
import { BrokerStartup, IHandler } from 'camaleon-rabbitmq';

const brokerAddress = process.env.BROKER_ADDRESS;
const exchangeName = 'example-message';
const broker = new BrokerStartup(
    brokerAddress, exchangeName, new ExampleHandler());

broker.Run();
