create table ACCOUNT(
	[id] uniqueidentifier not null default NEWID() primary key,
	[username] nvarchar(50) not null,
	[password] nvarchar(50) not null,
	[type] nvarchar(50) check (type in ('CUSTOMER', 'PARTNER', 'ADMIN')) not null,
)

go

create table CUSTOMER(
	[id] uniqueidentifier not null primary key,
	[first_name] nvarchar(50) not null,
	[last_name] nvarchar(50) not null,
	[email] nvarchar(100) not null,

	[gender] bit not null default 0,
	[address] nvarchar(200) not null,
	[birthday] Date not null,
	[phone] char(10) not null,
)

go

create table [PARTNER](
	[id] uniqueidentifier not null primary key,
	[first_name] nvarchar(50) not null,
	[last_name] nvarchar(50) not null,
	[email] nvarchar(50) not null,
	
	[job] nvarchar(50) not null,
	[company_name] nvarchar(50) not null,
	[country] nvarchar(50) not null,
	[office_address] nvarchar(200) not null,
	[office_phone] char(10) not null,
)

go

alter table ACCOUNT add 
	constraint FK_ACCOUNT_PARTNER foreign key (id) references [PARTNER](id),
	constraint FK_ACCOUNT_CUSTOMER foreign key (id) references CUSTOMER(id)
go