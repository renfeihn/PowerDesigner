
drop table if exists person;
/*==============================================================*/
/* Table: person                                           */
/*==============================================================*/
create table person
(
    id Varchar(20) not null comment '��ԱID',
    name Varchar(40) not null comment '����',
    age Integer(5) not null comment '����'
);
alter table person comment '��Ա��';