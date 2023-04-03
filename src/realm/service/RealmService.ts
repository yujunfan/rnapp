import Realm from 'realm';
import {Person} from './../modal';

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

  public insert(person: Person) {
    this.realm.write(() => {
      this.realm.create('Person', person);
    });
  }

  public queryAll(): Realm.Results<Person> {
    return this.realm.objects<Person>('Person');
  }

  public update(person: Person, updatePerson: Person) {
    this.realm.write(() => {
      person.name = updatePerson.name;
      person.age = updatePerson.age;
    });
  }

  public delete(person: Person) {
    this.realm.write(() => {
      this.realm.delete(person);
    });
  }
}
