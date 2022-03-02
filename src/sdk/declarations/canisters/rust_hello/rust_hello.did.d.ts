import type { Principal } from '@dfinity/principal';
export interface comment_input {
  'channel_id' : string,
  'parent_id' : [] | [string],
  'message' : string,
  'comment_id' : string,
}
export interface comment_output {
  'id' : string,
  'content' : string,
  'created_at' : bigint,
  'user_id' : string,
  'replies' : page,
}
export interface delete_comment_param {
  'channel_id' : string,
  'comment_id' : string,
}
export interface get_thread_param {
  'channel_id' : string,
  'cursor' : [] | [string],
  'limit' : number,
}
export interface page {
  'remaining_count' : bigint,
  'comments' : Array<comment_output>,
}
export type upsert_comment_param = comment_input;
export interface _SERVICE {
  'delete_comment' : (arg_0: delete_comment_param) => Promise<string>,
  'get_thread' : (arg_0: get_thread_param) => Promise<page>,
  'upsert_comment' : (arg_0: upsert_comment_param) => Promise<string>,
}
