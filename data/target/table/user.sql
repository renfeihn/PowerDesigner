
drop table "user" cascade constraints;

/*==============================================================*/
/* Table: "user"                                           */
/*==============================================================*/

create table "user"
(
    id varchar(32) not null,
    name varchar(40) not null,
    age Double(5,2) not null,
    constraint PK_USER primary  key (id)
) tablespace test01;
comment on table "user" is '�û���';
comment on column "user".id is '����ID';
comment on column "user".name is '����';
comment on column "user".age is '����';