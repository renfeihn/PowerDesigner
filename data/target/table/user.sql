
drop table user cascade constraints;

/*==============================================================*/
/* Table: user                                           */
/*==============================================================*/

create table user
(
    id Variable Characters(10) default '1' not null,
    name Variable Characters(10) not null,
    age Double(10) not null,
    constraint PK_USER (id,name,age)
) tablespace test01;
comment on table user is '�û���';
comment on column user.id is '����ID';
comment on column user.name is '����';
comment on column user.age is '����';