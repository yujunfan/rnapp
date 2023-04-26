import {BSON} from 'realm';
export class Person extends Realm.Object<Person> {
  _id!: BSON.ObjectId;
  name!: string;
  age!: number;

  static schema: Realm.ObjectSchema = {
    name: 'Person',
    primaryKey: '_id',
    properties: {
      _id: {
        type: 'objectId',
        default: () => new BSON.ObjectId(),
      },
      name: 'string',
      age: 'string',
    },
  };
}
