require("dotenv").config();
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

// connection to mongodb
const uri = `${process.env.DB_URI}/basic-graphql?retryWrites=true&w=majority`;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const server = new ApolloServer({ typeDefs, resolvers, plugins: [ApolloServerPluginLandingPageGraphQLPlayground()] });

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
