import { HelloWorld } from "./index";

describe('initial test', () => {
   it('should just work', () => {
       expect(HelloWorld.name).toBe("this ones the default export no");
   });
});