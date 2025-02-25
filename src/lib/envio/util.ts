export async function fetchGraphQL(
  operationsDoc: string,
  operationName: string,
  variables: Record<string, unknown>
) {
  return fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL as string, {
    method: 'POST',
    body: JSON.stringify({
      query: operationsDoc,
      variables,
      operationName,
    }),
  }).then(result => result.json());
}
