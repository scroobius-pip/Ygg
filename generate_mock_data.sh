  dfx canister call chat_canister upsert_comment '(record {channel_id="channel_1";message="hello";comment_id="comment_id_1"})'
  dfx canister call chat_canister upsert_comment '(record {channel_id="channel_1";message="hello 1";comment_id="comment_id_2"})'
  dfx canister call chat_canister upsert_comment '(record {channel_id="channel_1";message="hello 2";comment_id="comment_id_3"})'
  dfx canister call chat_canister upsert_comment '(record {channel_id="channel_1";message="hi";comment_id="comment_id_2_1";parent_id= opt "comment_id_2"})'
  dfx canister call chat_canister upsert_comment '(record {channel_id="channel_1";message="hi 2 2";comment_id="comment_id_2_2";parent_id= opt "comment_id_2"})'
  dfx canister call chat_canister upsert_comment '(record {channel_id="channel_1";message="hi 3";comment_id="comment_id_3_1";parent_id= opt "comment_id_3"})'