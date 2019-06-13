/*
 *
 * New actions
 *
 */

import { DEFAULT_ACTION, NEWS_LIST, NEWS_LIST_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getNewsList() {
  return {
    type: NEWS_LIST,
  };
}

export function getNewsListSuccess(newsList) {
  return {
    type: NEWS_LIST_SUCCESS,
    newsList
  };
}
