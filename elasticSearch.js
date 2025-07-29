import { Client } from "@elastic/elasticsearch";

const client = new Client({node:'http://localhost:9999'});

export default client;