
drop table if exists user;
/*==============================================================*/
/* Table: user                                           */
/*==============================================================*/
create table user
(
    id Variable Characters(32) not null default '1' comment '����ID',
    name Variable Characters(40) not null comment '����',
    age Double(5,2) not null comment '����',
    primary  key (id,name,age)
);
alter table user comment '�û���';