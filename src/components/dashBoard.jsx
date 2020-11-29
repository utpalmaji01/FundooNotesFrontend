import React, { PureComponent } from "react";
import clsx from "clsx";
import AppBar from "./appBar.jsx";
import SideNavBar from "./sideNavBar.jsx";
import AddNotes from "./addNotes.jsx";
import ShowNotes from "./showNotes.jsx";
import noteServices from "../sevices/noteServices.js";
import "../style/dashBoard.scss";

class DashBoard extends PureComponent {
  state = {
    isDrawerMin: true,
    allNotes: [],
    selectedMenu: "Notes",
  };

  setSelectedMenu = (value) => {
    this.setState({
      selectedMenu: value,
    });
  };

  setListSize = () => {
    this.setState({
      isDrawerMin: !this.state.isDrawerMin,
    });
  };

  componentDidMount() {
    noteServices
      .getAllNotes(localStorage.getItem("id"))
      .then((responce) => {
        this.setState({
          allNotes: responce.data.data.data,
        });
      })
      .catch((error) => {
        console.log("some error occour");
      });
  }

  componentDidUpdate() {
    console.log(this.state.selectedMenu);
  }

  render() {
    return (
      <>
        <div className="dashboard-container">
          <div className="dashboard-header">
            <AppBar setListSize={this.setListSize} />
          </div>
          <div className="dashboard-body">
            <div className="dashboard-sideNavBar">
              <SideNavBar
                expandList={this.expandList}
                minifyList={this.minifyList}
                isDrawerMin={this.state.isDrawerMin}
                setSelectedMenu={this.setSelectedMenu}
              />
            </div>
            <div
              className={clsx("dashboard-notes", {
                "drawer-open": !this.state.isDrawerMin,
              })}
            >
              <div className="addAnyNotes">
                <AddNotes
                  allNotes={this.state.allNotes}
                  setAllNotes={this.setAllNotes}
                />
              </div>
              <div className="showNotes">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio cum, ipsa, labore debitis doloremque fugit deserunt
                unde quos iure libero, maxime veritatis necessitatibus!
                Accusantium deleniti cupiditate animi. Nulla, nostrum! Accusamus
                fugit, cumque cupiditate molestiae dicta quis dolores eligendi,
                hic voluptate voluptas tempore pariatur obcaecati corrupti
                facere eius quod? Delectus eveniet magni, maxime asperiores
                adipisci commodi eum aspernatur excepturi corporis vitae sit
                similique modi debitis laborum reiciendis repellat amet! Neque,
                qui libero beatae voluptas, cumque voluptatum esse vero quasi
                saepe perspiciatis perferendis tempora doloribus eaque
                veritatis, harum unde! Alias deserunt veniam error odit dolores
                nam repudiandae natus eius, doloribus ipsum saepe. Incidunt,
                minima molestiae fuga veniam corrupti mollitia ipsam dolorem
                nobis non facntium id, assumenda quia quas aut dolores dolorum
                optio molestias! In eaque odit reiciendis eligendi provident at
                error ipsum pariatur quis assumenda ipsam voluptatum distinctio
                voluptatenatm a blanditiis voluptatum molestiae eos esse
                recusandae minus repudiandae soluta vitae doloribus, quos
                accusamus asperiores, natus deserunt ducimus impedit! Inventore
                veniam voluptatibus quibusdam. Odio eos, aut nemo consequuntur a
                ad nihil quae suscipit deserunt ea. Id delectus quas, numquam
                voluptatem assumenda et ipsum ducimus odit? Inventore delectus
                ipsum sunt odio impedit reiciendis in autem perspiciatis
                doloremque optio? Rerum illum recusandae dolorem quod, tenetur
                aliquid quasi veritatis ipsum, distinctio quam quisquam a iure
                saepe ab perspiciatis quos id? Natus nemo debitis dolorum earum
                quibusdam ducimus eius distinctio minus, maiores, reprehenderit
                porro beatae voluptas est consectetur eveniet molestias rerum
                magnam nobis aut illum error impedit veniam! Numquam asperiores
                dolorem architecto amet? Quod voluptatibus assumenda veniam
                nobis, blanditiis ad est maiores praesentium repellat animi
                laboriosam dolorum libero quo, aliquam perspiciatis nulla
                repudiandae quaerat voluptate deleniti architecto. Nam ab minima
                totam maiores molestias, blanditiis nulla delectus, commodi
                possimus expedita qui quam, voluptas ad! Repudiandae libero,
                iste unde ratione laudantium obcaecati a dicta. Dolorum
                architecto doloremque corporis labore mollitia atque omnis quis,
                laboriosam ad voluptate qui, debitis eius pariatur quas alias
                reiciendis earum officiis voluptatibus aspernatur dicta harum
                rerum sit? Rerum, sunt amet! Vel esse, culpa saepe at ipsa quia
                debitis. Totam laboriosam voluptas, nemo optio magni quo odit
                aliquid nam reprehenderit, error sed praesentium similique,
                iusto minima. Laboriosam ex at fuga eveniet rerum, quaerat
                deserunt quisquam soluta asperiores natus ipsum hic ipsa maiores
                placeat odit dolorum et quae nesciunt debitis facere aut odio
                culpa amet. Alias atque itaque sapiente ducimus doloremque
                accusantium. Sit dolore labore eaque. Quia, eos repellat.
                Blanditiis dicta incidunt facilis dolorum molestiae nobis at nam
                molestias totam tempore quaerat voluptatum est ab dolor quam
                natus nostrum unde officiis, eveniet quo error odit! Odit
                consequuntur nesciunt facilis amet, ipsa maiores, beatae
                suscipit impedit dolor possimus eius neque, doloribus nihil nisi
                earum quae ad nemo fuga voluptate at tempora in natus. Libero
                totam magnam consequuntur vel ea harum magni facilis quia id
                dicta. Deleniti dolorem incidunt voluptatibus aspernatur ex
                voluptatem porro laboriosam mollitia nulla.
                {/* <ShowNotes
                  allNotes={this.state.allNotes}
                  selectedMenu={this.state.selectedMenu}
                /> */}
              </div>
            </div>
          </div>
        </div>
        {/* <AppBar setListSize={this.setListSize} />
          <SideNavBar
            expandList={this.expandList}
            minifyList={this.minifyList}
            isDrawerMin={this.state.isDrawerMin}
            setSelectedMenu={this.setSelectedMenu}
          />
          <AddNotes allNotes={this.state.allNotes} setAllNotes={this.setAllNotes} />
          <ShowNotes allNotes={this.state.allNotes} selectedMenu={this.state.selectedMenu} /> */}
      </>
    );
  }
}

export default DashBoard;
