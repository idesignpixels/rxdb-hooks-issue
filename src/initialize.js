import { createRxDatabase, addRxPlugin } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';


const initialize = async () => {
  addRxPlugin(RxDBDevModePlugin);
  // create RxDB
  const db = await createRxDatabase({
    name: 'test_database',
    storage: getRxStorageDexie(),
  });

  // create a collection
  const collection = await db.addCollections({
    characters: {
      schema: {
        title: 'characters',
        version: 0,
        type: 'object',
        primaryKey: 'id',
        properties: {
          id: {
            type: 'string',
            maxLength: 250,
          },
          name: {
            type: 'string',
            maxLength: 250,
          },
        },
      },
    },
  });

  // maybe sync collection to a remote
  // ...

  return db;
};

export default initialize;