import { MenuItemType } from "./types";

export const TopBarMenu: MenuItemType[] = [
  {
    label: `<i style="font-size: 20px;" class="bx bxl-apple" ></i>`,
    children: [
      "About This Mac",
      null,
      "System Preference...",
      "App Store...",
      null,
      "Recent Items",
      null,
      "Force Quit",
      null,
      "Sleep",
      "Restart...",
      "Shut Down...",
      null,
      "Lock Screen",
      "Log out",
    ],
  },
  {
    label: "Finder",
    children: [
      "About Finder",
      null,
      "Preference...",
      null,
      "Empty Trash...",
      null,
      "Services",
      null,
      "Hide Finder",
      "Hide Others",
      "Show All",
    ],
  },
  {
    label: "File",
    children: [
      "New Finder Window",
      "New Folder",
      "New Folder with Selection",
      "New Smart Folder",
      "New Tab",
      "Open in New Tab",
      "Open With",
      "Close Window",
      null,
      "Get Summary Info",
      "Rename",
      "Compress",
      "Duplicate",
      "Make Alias",
      "Quick Look",
      "Print",
      null,
      "Share",
      null,
      "Show Original",
      "Add to Dock",
      null,
      "Move to Trash",
      "Eject",
      null,
      "Tags...",
      "Find by Name...",
    ],
  },
  {
    label: "Edit",
    children: [
      "Undo",
      "Redo",
      null,
      "Cut",
      "Copy",
      "Paste",
      "Select All",
      null,
      "Show Clipboard",
      null,
      "Start Dictation",
      "Emoji & Symbols",
    ],
  },
  {
    label: "View",
    children: [
      "as Icons",
      "as List",
      "as Columns",
      "as Gallery",
      null,
      "Use Stacks",
      "Sort By",
      "Clean Up",
      "Clean Up By",
      null,
      "Hide Sidebar",
      "Hide Preview",
      null,
      "Hide Toolbar",
      "Show All Tabs",
      "Hide Tab Bar",
      "Hide Path Bar",
      "Hide Status Bar",
      null,
      "Customize Toolbar...",
      null,
      "Show View Options",
      "Show Preview Options",
      null,
      "Enter Full Screen",
    ],
  },

  {
    label: "Go",
    children: [
      "Back",
      "Forward",
      "Enclosing Folder",
      null,
      "Recents",
      "Documents",
      "Desktop",
      "Downloads",
      "Home",
      "Computers",
      "AirDrop",
      "Network",
      "iCloud Drive",
      "Applications",
      "Utilities",
      null,
      "Recent Folders",
      null,
      "Go to Folders",
      "Connect to Server...",
    ],
  },
  {
    label: "Window",
    children: [
      "Minimize",
      "Zoom",
      "Move Window to Left Side of Screen",
      "Move Window to Right Side of Screen",
      "Cycle Through Windows",
      null,
      "Show Previous Tab",
      "Show Next Tab",
      "Move Tab to New Window",
      "Merge All Windows",
      null,
      "Bring All to Front",
    ],
  },
  {
    label: "Help",
    children: [
      "macOS Help",
      null,
      "See What's New in macOS",
      "New to Mac? Tour the Basics",
      "Get to know your MacBook",
    ],
  },
];
