import Realm from 'realm';
import {Person} from './../modal/Person';

export interface PersonType {
  _id: any;
  name: string;
  age: string;
}

export class RealmService {
  private static instance: RealmService;
  private realm: Realm;

  private constructor() {
    this.realm = new Realm({
      schema: [Person],
    });
  }

  public static getInstance(): RealmService {
    if (!RealmService.instance) {
      RealmService.instance = new RealmService();
    }
    return RealmService.instance;
  }

  public insert(person: PersonType) {
    this.realm.write(() => {
      this.realm.create('Person', person);
    });
  }

  public queryAll(): Realm.Results<PersonType> {
    return this.realm.objects<PersonType>('Person');
  }

  public update(person: PersonType, updatePerson: PersonType) {
    this.realm.write(() => {
      person.name = updatePerson.name;
      person.age = updatePerson.age;
    });
  }

  public delete(person: PersonType) {
    this.realm.write(() => {
      this.realm.delete(person);
    });
  }
}
