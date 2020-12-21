export interface Project {
  projectName: string;
  projectNameEn?: string;
  notes?: string;
  assignedUsers: AssignedUser[];
  buildingCount?: number;
  buildings?: Building[];
  progress?: ProgressRecord[];
  storyProgress?: storyItemProgressRecord[];
}
//-----------------------------------------------------------------------------

export interface Building {
  buildingID: number;
  storyCount: number;
  buildingName: string;
  notes?: string;
}
//-----------------------------------------------------------------------------

export interface storyItem {
  storyItemID: number;
  storyItemNameEn?: string;
  storyItemNameAr: string;
  storyItemCode: string;
}
//-----------------------------------------------------------------------------

export interface storyItemProgressRecord {
  storyItemID: number;
  percentage: number;
  userID: number;
  entryDate: Date;
}
//-----------------------------------------------------------------------------

export interface ProgressRecord {
  subItemID: number;
  percentage: number;
  userID: number;
  entryDate: Date;
}
//-----------------------------------------------------------------------------

export interface mainItem {
  mainItemID: number;
  mainItemNameEn: string;
  mainItemNameAr: string;
  subItems: subItem[];
}
//-----------------------------------------------------------------------------

export interface subItem {
  subItemID: number;
  mainItemID: number;
  subItemNameEn: string;
  subItemNameAr: string;
  subItemcode: string;
  isShow: Boolean;
  displayOrder: number;
  percentage?: number;
}
//-----------------------------------------------------------------------------

export interface User {
  userID: number;
  userNameAr: string;
  userNameEn: string;
}
//-----------------------------------------------------------------------------

export interface userPrivilege {
  privilegeName: string;
  privilegeCode: number;
}
//-----------------------------------------------------------------------------

export interface AssignedUser {
  userID: number;
  privilegeCode: number;
}
