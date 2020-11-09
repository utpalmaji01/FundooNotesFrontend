import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  InputAdornment,
  InputBase,
} from "@material-ui/core";
import {
  PinDropOutlined as PinDropOutlinedIcon,
  AddAlertOutlined as AddAlertOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  PaletteOutlined as PaletteOutlinedIcon,
  InsertPhotoOutlined as InsertPhotoOutlinedIcon,
  ArchiveOutlined as ArchiveOutlinedIcon,
} from "@material-ui/icons";

import "../style/dashBoardNotes.scss";

export default function DashBoardNotes() {
  const [isAddNote, setIsAddNote] = useState(false);
  const [addNotePlaceHolder, setAddNotePlaceHolder] = useState(
    "Take a note..."
  );

  return (
    <>
      <div className="dashBoardNotes-container">
        <Card className="add-note-from">
          <CardContent>
            <InputBase
              fullWidth
              margin="dense"
              placeholder={addNotePlaceHolder}
              style={{ fontSize: 20 }}
              onClick={() => {
                setIsAddNote(true);
                setAddNotePlaceHolder("Title");
              }}
              endAdornment={
                isAddNote && (
                  <InputAdornment position="end">
                    <IconButton aria-label="Pin Note">
                      <PinDropOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }
            />
            {isAddNote && (
              <InputBase
                fullWidth
                margin="dense"
                multiline
                placeholder="Take a note..."
              />
            )}
          </CardContent>
          {isAddNote && (
            <CardActions>
              <IconButton color="inherit" aria-label="reminder">
                <AddAlertOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" aria-label="reminder">
                <PersonOutlineOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" aria-label="reminder">
                <PaletteOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" aria-label="reminder">
                <InsertPhotoOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" aria-label="reminder">
                <ArchiveOutlinedIcon fontSize="small" />
              </IconButton>

              <Button className="close-button">Close</Button>
            </CardActions>
          )}
        </Card>
      </div>
      <div className="all-notes">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
          architecto atque fugit, beatae itaque aliquam temporibus corporis! Eum
          quod nemo blanditiis. Laudantium saepe veniam et similique officiis
          earum asperiores minima? Ex libero vitae facilis nobis mollitia quos,
          distinctio delectus officiis corrupti! Eum deleniti minus quisquam
          quae. Laudantium ea corporis soluta quibusdam consequatur totam
          tempora! Dolorem possimus quam saepe et at, nulla id tenetur rerum,
          aperiam facere, nesciunt quo mollitia soluta. Nihil fugit facilis
          quisquam quo laboriosam atque omnis, culpa voluptatem numquam officiis
          sint porro inventore soluta a deserunt aperiam? Eum in accusantium
          natus distinctio quaerat reprehenderit quasi dolor fugit odio
          repellendus. Eveniet, unde. Et assumenda deleniti laborum, expedita
          sit doloremque architecto inventore pariatur rem corporis asperiores
          enim obcaecati recusandae autem commodi animi ducimus eligendi! Porro
          earum quae blanditiis repellendus repellat ducimus temporibus hic?
          Voluptas omnis enim ex cum maxime nulla fugiat exercitationem, et nisi
          odit, reprehenderit sit ut autem facilis architecto ea? Ipsum, dolorum
          amet saepe ab, autem reprehenderit labore nesciunt impedit quia non,
          dolorem animi recusandae aspernatur ipsa eum? Quasi ab aliquam error
          minus nisi eius, ex hic dicta unde voluptas porro expedita quae
          adipisci distinctio quas neque minima recusandae maiores fugit vitae
          quaerat temporibus vel et. Cum, sunt?
        </p>
      </div>
    </>
  );
}
