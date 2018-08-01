import { TestModulModule } from './test-modul.module';

describe('TestModulModule', () => {
  let testModulModule: TestModulModule;

  beforeEach(() => {
    testModulModule = new TestModulModule();
  });

  it('should create an instance', () => {
    expect(testModulModule).toBeTruthy();
  });
});
