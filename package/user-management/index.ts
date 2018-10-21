import { compose } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';

export const HelloWorld = {
    name: "this ones the default export"
};

const avoidTreeShaking1 = compose();
const avoidTreeShaking2 = createEntityAdapter();