import DynamicFormModule from '../../../src/dynamicForms/index';

let df = new DynamicFormModule();

test('Test public properties are accessible', () => {
    expect(df.requiredFormFields).toEqual([]);
});