import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Cell } from '../';
import { CellModel } from '../../model';

configure({ adapter: new Adapter() });

describe(`component:: <Cell/>`, () => {
    describe(`::render`, () => {
        it(' - renders without error', () => {
            const model = new CellModel('A1');

            shallow(<Cell model={model} />);
        });
    });
});
