Create table [ACCOUNT] (
	[account_id] Uniqueidentifier NOT NULL default(newid()),
	[username] varchar(255) NOT NULL,
	[password] varchar(255) NOT NULL,
	[type] varchar(255) NOT NULL,
Primary Key  ([account_id])
) 
go

Create table [CUSTOMER] (
	[customer_id] Uniqueidentifier NOT NULL default(newid()),
	[name] Nvarchar(255) NOT NULL,
	[gender] Bit NOT NULL,
	[birthday] Datetime NOT NULL,
	[address] Nvarchar(255) NOT NULL,
	[email] varchar(255) NOT NULL,
	[phone] Numeric(11,0) NOT NULL,
Primary Key  ([customer_id])
) 
go

Create table [PARTNER] (
	[partner_id] Uniqueidentifier NOT NULL default(newid()),
	[name] Nvarchar(255) NOT NULL,
	[phone] Numeric(11,0) NOT NULL,
	[email] varchar(255) NOT NULL,
	[job] Nvarchar(255) NOT NULL,
	[company_name] Nvarchar(255) NOT NULL,
	[country] Nvarchar(255) NOT NULL,
	[office_address] Nvarchar(255) NOT NULL,
	[office_phone] Numeric(11,0) NOT NULL,
Primary Key  ([partner_id])
) 
go

Create table [REWARD] (
	[customer_id] Uniqueidentifier NOT NULL default(newid()),
	[reward] Numeric(18,0) NOT NULL,
	[value] Numeric(18,0) NOT NULL,
Primary Key  ([customer_id])
) 
go

Create table [SERVICE] (
	[partner_id] Uniqueidentifier NOT NULL default(newid()),
	[service_name] Nvarchar(255) NOT NULL,
Primary Key  ([partner_id])
) 
go

Create table [SERVICE_CLASSIFY] (
	[id] Uniqueidentifier NOT NULL default(newid()),
	[name] Nvarchar(255) NOT NULL,
Primary Key  ([id])
) 
go

Create table [PRICE_BRACKET] (
	[bracket_id] Uniqueidentifier NOT NULL default(newid()),
	[max_price] Numeric(20,0) NOT NULL,
	[min_price] Numeric(20,0) NOT NULL
Primary Key  ([bracket_id])
) 
go


insert into SERVICE
values (newid(), N'Chuyến bay')
insert into SERVICE
values (newid(), N'Khách sạn')
insert into SERVICE
values (newid(), N'Ðưa dón sân bay')
insert into SERVICE
values (newid(), N'Biệt thự và can hộ')
insert into SERVICE
values (newid(), N'Tour du lịch')
insert into SERVICE
values (newid(), N'Thuê xe')
insert into SERVICE
values (newid(), N'Nhà hàng')
insert into SERVICE
values (newid(), N'Voucher')
insert into SERVICE
values (newid(), N'Combo tiết kiệm')