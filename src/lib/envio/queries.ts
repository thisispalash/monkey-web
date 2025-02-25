import { fetchGraphQL,  } from './util';

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

  const res = await fetchGraphQL(doc, 'findSCA', {});
  const data = res.data.MonkeyFactory_SpawnMonkey;

  if (data.length === 0) {
    return null;
  }

  return data[0];
}
