import { IDropDown } from "./dropDown";

export interface ISideNavBar {
	isSidebarOpen: boolean;
	isNavbarOpen: boolean;
	dropdownList: IDropDown[];
}

export interface ISideNavBarRoodState{
	sideNavbar: ISideNavBar;
}