import {Book} from './ItemSchema';
import {createRealmContext} from '@realm/react';
export const RealmContext = createRealmContext({
  // Pass all of your models into the schema value.
  schema: [Book],
  // inMemory: true, //要创建一个完全在内存中运行而不写入文件的领域
});
