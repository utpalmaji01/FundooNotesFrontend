import { shallow } from "enzyme";
import SingUp from "../components/core/SingUp.jsx";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("SingUp", () => {
  test("sing up renders without crashing", () => {
    shallow(<SingUp />);
  });

  test("eye button work properly or not", () => {
    const wrapper = shallow(<SingUp />);
    expect(wrapper.state("showPassword")).toEqual(false);
    wrapper.find(".eye-icon-button").simulate("click");
    expect(wrapper.state("showPassword")).toEqual(true);
  });

  // test("input work properly or not", () => {
  //   const wrapper = shallow(<SingUp />);
  //   const credentials = { firstName: "utpal", lastName: "maji" };
  //   wrapper
  //     .find('input[name="firstName"]')
  //     .simulate("change", {
  //       target: { name: "firstName", value: "utpal" },
  //     });
  //   expect(wrapper.state("firstName")).toEqual(credentials.firstName);
  // });
});
