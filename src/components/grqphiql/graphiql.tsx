import { GraphiQLProvider } from '@graphiql/react';
import { createGraphiQLFetcher } from '@graphiql/toolkit';
import React from 'react';
import { QueryEditor } from '@graphiql/react';
import '@graphiql/react/dist/style.css';

const fetcher = createGraphiQLFetcher({
  url: 'https://my.graphql.api/graphql',
});

export default function GraphiQl() {
  return (
    <GraphiQLProvider fetcher={fetcher}>
      <div className="graphiql-container">
        <QueryEditor />
      </div>
    </GraphiQLProvider>
  );
}
