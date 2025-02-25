import { fetchGraphQL } from './util';

export async function findSCA(addr: string) {
  const doc = `
  query findSCA {
    MonkeyFactory_SpawnMonkey(where: {human: {_eq: "${addr}"}}) {
      human
      db_write_timestamp
      id
      monkey
      uuid
    }
  }
`;

  return await fetchGraphQL(doc, 'findSCA', {})
}
