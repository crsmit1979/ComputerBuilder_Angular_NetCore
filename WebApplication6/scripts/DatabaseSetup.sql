--select * from [table]

if (EXISTS(select * from sys.tables where name='tblUSB'))
BEGIN
	drop table tblUSB;
END
create table tblUSB (id int identity(1,1), description nvarchar(255))
insert into tblUSB(id, description) values ('USB 3.0');
insert into tblUSB(id, description) values ('USB 2.0');
insert into tblUSB(id, description) values ('USB C');



if (EXISTS(select * from sys.tables where name='tblPowerSupply'))
BEGIN
	drop table tblPowerSupply;
END
create table tblPowerSupply (id int identity(1,1), description nvarchar(255))
insert into tblPowerSupply
select distinct col6 from [table];

if (EXISTS(select * from sys.tables where name='tblHDDSize'))
BEGIN
	drop table tblHDDSize;
END
create table tblHDDSize (id int identity(1,1), description nvarchar(255))
insert into tblHDDSize 
select distinct col1 from [table]

if (EXISTS(select * from sys.tables where name='tblCPU'))
BEGIN
	drop table tblCPU;
END
create table tblCPU (id int identity(1,1), description nvarchar(255));
insert into tblCPU (description)
select distinct col7 from [table];


if (EXISTS(select * from sys.tables where name='tblGraphicsCard'))
BEGIN
	drop table tblGraphicsCard;
END
create table tblGraphicsCard (id int identity(1,1), description nvarchar(255));
insert into tblGraphicsCard 
select distinct col4 from [table]

if (EXISTS(select * from sys.tables where name='tblMemory'))
BEGIN
	drop table tblMemory;
END
create table tblMemory (id int identity(1,1), description nvarchar(255));
insert into tblMemory 
select distinct col2 from [table];

if (EXISTS(select * from sys.tables where name='tblWeightUnit'))
BEGIN
	drop table tblWeightUnit;
END
create table tblWeightUnit (id int identity(1,1), description nvarchar(255))
insert into tblWeightUnit values ('kg');
insert into tblWeightUnit values ('lb');
if (EXISTS(select * from sys.tables where name='tblComputer'))
BEGIN
	drop table tblComputer;
END
create table tblComputer (
id int identity(1,1),
HddSizeId int, 
MemoryId int,
CpuId int, 
GraphicsCardId int,
[Weight] decimal,
WeightUnitId int,
PowerSupplyId int
)

delete from tblComputer;
DBCC CHECKIDENT ('tblComputer', RESEED, 1)
insert into tblComputer (memoryid, cpuid, graphicscardid, hddsizeid, weightunitid, weight, powersupplyid)
select m.id, c.id, g.id, h.id, wu.id, replace(replace(t.col5,'kg',''),'lb',''), p.id
from [table] t
left outer join tblMemory m on t.col2 = m.description
left outer join tblCPU c on t.col7 = c.description
left outer join tblGraphicsCard g on t.col4 = g.description
left outer join tblhddsize h on t.col1 = h.description
left outer join tblWeightUnit wu on t.col5 like '%'+wu.description+'%'
left outer join tblPowerSupply p on t.col6 = p.description
select * from tblComputer;

if (EXISTS(select * from sys.tables where name='tblComputerUSB'))
BEGIN
	drop table tblComputerUSB;
END
create table tblComputerUSB(id int identity(1,1), computerId int, usbId int, quantity int);

DBCC CHECKIDENT ('tblComputerUSB', RESEED, 1)
insert into tblComputerUSB(computerId, usbId, quanity) values(1,1,2);
insert into tblComputerUSB(computerId, usbId, quanity) values(1,2,4);
insert into tblComputerUSB(computerId, usbId, quanity) values(2,1,3);
insert into tblComputerUSB(computerId, usbId, quanity) values(2,2,4);
/*
2 x USB 3.0, 4 x USB 2.0
3 x USB 3.0, 4 x USB 2.0
4 x USB 3.0, 4 x USB 2.0
5 x USB 2.0, 4 x USB 3.0
2 x USB 3.0, 2 x USB 2.0, 1 x USB C
2 x USB C, 4 x USB 3.0
8 x USB 3.0
4 x USB 2.0
10 x USB 3.0, 10 x USB 2.0, 10 x USB C
19 x USB 3.0, 4 x USB 2.0
*/
select * from [table]
