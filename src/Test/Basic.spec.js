import {Sample} from "./Basic";
import React  from "react";
import {mount} from 'enzyme';

describe("Test React Component",() => {
    test("Test Mounting of react component", () => {
        const warapper = mount(<Sample/>);
        const p = warapper.find(".samp");
        expect(p.text()).toBe(" Hi hello.")
    })
})