import { shallow } from "enzyme";
import LogIn from "../components/core/logIn.jsx";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("LogIn", () => {
  test("logIn renders without crashing", () => {
    shallow(<LogIn />);
  });

  // test("eye button work properly or not", () => {
  //   const wrapper = shallow(<LogIn />);
  //   expect(wrapper.state("showPassword")).toEqual(false);
  //   wrapper.find(".toggle-password-eye").simulate("click");
  //   expect(wrapper.state("showPassword")).toEqual(false);
  // });
});
