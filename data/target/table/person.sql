
drop table person cascade constraints;

/*==============================================================*/
/* Table: person                                           */
/*==============================================================*/

create table person
(
    id Variable Characters(10) not null,
    name Variable Characters(10) not null,
    age Integer(10) not null
) tablespace test03;
comment on table person is '��Ա��';
comment on column person.id is '��ԱID';
comment on column person.name is '����';
comment on column person.age is '����';