import { ExampleMessage } from '../example.message';
import { IProducer, RabbitProducer } from 'camaleon-rabbitmq';

const brokerAddress = process.env.BROKER_ADDRESS || 'amqp://guest:guest@localhost:5672';
const producer: IProducer = new RabbitProducer(brokerAddress);
const exchangeName = 'example-message';

const message = new ExampleMessage();
producer.produce<ExampleMessage>(exchangeName, message);
