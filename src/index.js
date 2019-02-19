import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo"; // 使用hooks情况下也可以省略
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import Users from "./pages/Users";

import "./styles.css";

const client = new ApolloClient({
  uri: "https://qk9qvkw6nw.sse.codesandbox.io/"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <div className="App">
          <h2>My first Apollo app 🚀</h2>
          <Suspense fallback={<div>Suspense loading...</div>}>
            <Users />
          </Suspense>
        </div>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
