import { shallow } from "enzyme";
import App from "../App.js";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("App", () => {
  test("renders without crashing", () => {
    const wrapper = shallow(<App />);
  });
});
