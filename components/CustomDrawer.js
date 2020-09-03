import React from "react";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { DrawerAction } from "@react-navigation/native";

function Sidebar(...props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Rate Us" />
    </DrawerContentScrollView>
  );
}
export default Sidebar;
