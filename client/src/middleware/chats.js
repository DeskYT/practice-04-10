import socket from "../api";
import {emitChat} from "../api/api";
export const sendMessage = (chatId, message, handler) => emitChat("sendMessage", {chatId, message}, handler);
export const getAllMessages = (chatId, handler) => emitChat( "getAllMessages", {chatId}, handler);
export const getNewMessages = (chatId, handler) => emitChat( "getNewMessages", {chatId}, handler);
export const getChatsList = (handler) => emitChat( "getChatsList", {}, handler);
export const createChat  = (chatName, handler) => emitChat( "create", {chatName}, handler);

