import { shallow } from "enzyme";
import ResetPassword from "../components/core/resetPassword.jsx";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("ResetPassword", () => {
  test("ResetPassword renders without crashing", () => {
    shallow(<ResetPassword />);
  });

//   test("input work properly or not", () => {
//     const wrapper = shallow(<ResetPassword />);
//     wrapper
//       .find('input[name="password"]')
//       .simulate("change", {
//         target: { name: "password", value: "utpalmaji@123" },
//       });
//     expect(wrapper.state("passWord")).toEqual("utpalmaji@123");
//   });
});
