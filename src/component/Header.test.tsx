import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import { Header } from "./Header";

describe("Header", () => {
    beforeAll(() => {
        console.log("beforeAll");
    });

    beforeEach(() => {
        console.log("beforeEach");
    });

    test("render", () => {
        const { asFragment } = render(<Header title="test" />);

        expect(asFragment()).toMatchSnapshot();

        // expect(screen).toHaveTextContent("test");
    });
});
