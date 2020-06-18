import {get, post} from 'src/services/request';

let baseUrl: string = '';

const GET_REPAIR_COURSE_LIST = baseUrl + '/onlineclass-service/v1/remedialclass/leaderboard';
const GET_CLASS_TABS = baseUrl + '/onlineclass-service/v1/classList';
const GET_ClASS_PROGRESS = baseUrl + '/onlineclass-service/v1/onlineclass/unitList';
const GET_CLASS_LIST = baseUrl + '/onlineclass-service/v1/onlineclass/leaderboard';
const GET_CLASS_FINISH_LIST = baseUrl + '/onlineclass-service/v1/onlineclass/finishList';
const GET_REPAIR_COURSE_CLASS_FILTER_LIST = baseUrl + '/onlineclass-service/v1/remedialClass/classList';
const GET_REPAIR_COURSE_PROGRESS_FILTER_LIST = baseUrl + '/onlineclass-service/v1/remedialClass/courseTree';
const GET_GOT_TO_COURSE_LIST = baseUrl + '/onlineclass-service/v1/onlineclass/recordList';

const GET_PROJECT_LIST = baseUrl + '/interactive-service/v1/projectPrompt/filterByProjectNum';
const SEND_ASSISTED_TIPS = baseUrl + '/interactive-service/v1/sendMsg2Private?';

export const GetClassList = (data: { current?: number; pageSize?: number; userId?: number, classId?: number; progress?: string; }) => {
  return get(GET_CLASS_LIST, data)
};

export const GetClassTabs = (data: { userId: number; }) => {
  return get(GET_CLASS_TABS, data)
};

export const GetClassProgressList = (data: { classId: number; }) => {
  return get(GET_ClASS_PROGRESS, data)
};

export const GetRepairCourseList = (data: { userId: number; }) => {
  return get(GET_REPAIR_COURSE_LIST, data)
};

export const GetClassFinishList = (data: { classId: number; }) => {
  return get(GET_CLASS_FINISH_LIST, data)
};

export const GetRepairCourseClassFilterList = (data: { userId: number; }) => {
  return get(GET_REPAIR_COURSE_CLASS_FILTER_LIST, data)
};

export const GetRepairCourseProgressFilterList = (data: { userId: number; }) => {
  return get(GET_REPAIR_COURSE_PROGRESS_FILTER_LIST, data)
};

export const GetGotToCourseList = (data: { classId: number; }) => {
  return get(GET_GOT_TO_COURSE_LIST, data)
};

export const GetAssistedList = (data: { projectNum?: number; userId?: number; classId?: number; unitId?: number; courseId?: number; }) => {
  return get(GET_PROJECT_LIST, data)
};

export const SendAssistedTips = (teacherId: number, studentId: number, data: any) => {
  return post(`${SEND_ASSISTED_TIPS}from=${teacherId}&to=${studentId}`, data)
};
