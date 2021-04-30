import React from 'react';
import {
  Check,
  Delete,
  Description,
  Help,
  Home,
  Info,
  MoreHoriz,
  Notification,
  Search,
  Settings,
  Right,
  Expand,
} from 'atomic/Icon/iconList';
import { SVGProps } from './icons';

export const setIcon = (name: string) => {
  switch (name) {
    case 'check':
      return Check;
    case 'delete':
      return Delete;
    case 'description':
      return Description;
    case 'help':
      return Help;
    case 'home':
      return Home;
    case 'info':
      return Info;
    case 'moreHoriz':
      return MoreHoriz;
    case 'notification':
      return Notification;
    case 'search':
      return Search;
    case 'settings':
      return Settings;
    case 'right':
      return Right;
    case 'expand':
      return Expand;
    default:
      return Home;
  }
};
