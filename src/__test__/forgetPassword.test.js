import { shallow } from "enzyme";
import ForgetPassword from "../components/core/forgetPassword.jsx";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("ForgetPassword", () => {
  test("ForgetPassword renders without crashing", () => {
    shallow(<ForgetPassword />);
  });

//   test("input work properly or not", () => {
//     const wrapper = shallow(<ForgetPassword />);
//     wrapper
//       .find('input[name="email"]')
//       .simulate("change", {
//         target: { name: "email", value: "utpalmaji.um@gmail.com" },
//       });
//     expect(wrapper.state("email")).toEqual("utpalmaji.um@gmail.com");
//   });
});
