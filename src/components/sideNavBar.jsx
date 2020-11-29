import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  EmojiObjectsOutlined as EmojiObjectsIcon,
  NotificationsNone as NotificationsNoneIcon,
  Create as CreateIcon,
  ArchiveOutlined as ArchiveIcon,
  DeleteOutline as DeleteOutlineIcon,
} from "@material-ui/icons";
import clsx from "clsx";
import "../style/sideNavBar.scss";

export default function SideNavBar(props) {
  const selectedMenu = (e) => {
    props.setSelectedMenu(e.target.innerText);
  };
  return (
    <>
      <Drawer
        variant="permanent"
        className={clsx("sideNav", {
          "sideNav-inactive": props.isDrawerMin,
          "sideNav-active": !props.isDrawerMin,
        })}
      >
        <List className="sideNav-list">
          <ListItem button onClick={selectedMenu} className="list-item">
            <ListItemIcon>
              <EmojiObjectsIcon />
            </ListItemIcon>
            <ListItemText
              primary="Notes"
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem button onClick={selectedMenu} className="list-item">
            <ListItemIcon>
              <NotificationsNoneIcon />
            </ListItemIcon>
            <ListItemText
              primary="Reminders"
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem button onClick={selectedMenu} className="list-item">
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText
              primary="Edit Labels"
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem button onClick={selectedMenu} className="list-item">
            <ListItemIcon>
              <ArchiveIcon />
            </ListItemIcon>
            <ListItemText
              primary="Archives"
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem button onClick={selectedMenu} className="list-item">
            <ListItemIcon>
              <DeleteOutlineIcon />
            </ListItemIcon>
            <ListItemText
              primary="Trash"
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
