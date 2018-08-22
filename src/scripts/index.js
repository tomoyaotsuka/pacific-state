import internal from './helper/internal';
import Foo from './modules/Foo';
export default class index {
  constructor() {
    const foo = new Foo();
    console.log(internal(foo).prop);
  }
}
