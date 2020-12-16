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
import history from "../History";
import "../style/sideNavBar.scss";

export default function SideNavBar(props) {
  const selectedMenu = (e, currentMenu) => {
    e.preventDefault();
    props.setSelectedMenu(currentMenu);
    history.push("/dashBoard/"+currentMenu);
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
          <ListItem
            button
            onClick={(e) => selectedMenu(e, "Notes")}
            className={clsx("list-item", {
              "list-item-active": props.selectedMenu === "Notes" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
             onClick={(e) => selectedMenu(e, "Notes")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Notes",
              })}
            >
              <EmojiObjectsIcon />
            </ListItemIcon>
            <ListItemText
             onClick={(e) => selectedMenu(e, "Notes")}
              primary="Notes"
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => selectedMenu(e, "Reminders")}
            className={clsx("list-item", {
              "list-item-active": props.selectedMenu === "Reminders" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
            onClick={(e) => selectedMenu(e, "Reminders")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Reminders",
              })}
            >
              <NotificationsNoneIcon />
            </ListItemIcon>
            <ListItemText
            onClick={(e) => selectedMenu(e, "Reminders")}
              primary="Reminders"
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => selectedMenu(e, "Edit Labels")}
            className={clsx("list-item", {
              "list-item-active": props.selectedMenu === "Edit Labels" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Edit Labels",
              })}
            >
              <CreateIcon />
            </ListItemIcon>
            <ListItemText
              primary="Edit Labels"
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => selectedMenu(e, "Archives")}
            className={clsx("list-item", {
              "list-item-active": props.selectedMenu === "Archives" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
            onClick={(e) => selectedMenu(e, "Archives")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Archives",
              })}
            >
              <ArchiveIcon />
            </ListItemIcon>
            <ListItemText
            onClick={(e) => selectedMenu(e, "Archives")}
              primary="Archives"
              className={clsx("listItemText", {
                "list-min": props.isDrawerMin,
              })}
            />
          </ListItem>
          <ListItem
            button
            onClick={(e) => selectedMenu(e, "Trash")}
            className={clsx("list-item", {
              "list-item-active": props.selectedMenu === "Trash" && !props.isDrawerMin,
            })}
          >
            <ListItemIcon
            onClick={(e) => selectedMenu(e, "Trash")}
              className={clsx("sidenav-icon", {
                "sidenav-icon-active": props.selectedMenu === "Trash",
              })}
            >
              <DeleteOutlineIcon />
            </ListItemIcon>
            <ListItemText
            onClick={(e) => selectedMenu(e, "Trash")}
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
