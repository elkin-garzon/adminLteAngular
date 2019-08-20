import { CompartidaModule } from './compartida.module';

describe('CompartidaModule', () => {
  let compartidaModule: CompartidaModule;

  beforeEach(() => {
    compartidaModule = new CompartidaModule();
  });

  it('should create an instance', () => {
    expect(compartidaModule).toBeTruthy();
  });
});
