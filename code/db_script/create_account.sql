use master

go

if exists (select 1 from SYS.DATABASES where name = N'Profile')
	drop database Profile

create database [Profile]

go

use [Profile]

go

-- Create table [ACCOUNT] (
-- 	[id] Uniqueidentifier NOT NULL default(newid()),
-- 	[username] varchar(255) NOT NULL,
-- 	[password] varchar(255) NOT NULL,
-- 	[type] varchar(255) NOT NULL check (type in ('ADMIN', 'CUSTOMER', 'PARTNER')),
-- Primary Key  ([id])
-- ) 
-- go

-- Create table [CUSTOMER] (
-- 	[account_id] Uniqueidentifier NOT NULL default(newid()),
-- 	[name] Nvarchar(255) NOT NULL,
-- 	[gender] Bit NOT NULL,
-- 	[birthday] Datetime NOT NULL,
-- 	[address] Nvarchar(255) NOT NULL,
-- 	[email] varchar(255) NOT NULL,
-- 	[phone] Numeric(11,0) NOT NULL,
-- Primary Key  ([account_id])
-- ) 
-- go

-- Create table [PARTNER] (
-- 	[account_id] Uniqueidentifier NOT NULL default(newid()),
-- 	[name] Nvarchar(255) NOT NULL,
-- 	[phone] Numeric(11,0) NOT NULL,
-- 	[email] varchar(255) NOT NULL,
-- 	[job] Nvarchar(255) NOT NULL,
-- 	[company_name] Nvarchar(255) NOT NULL,
-- 	[country] Nvarchar(255) NOT NULL,
-- 	[office_address] Nvarchar(255) NOT NULL,
-- 	[office_phone] Numeric(11,0) NOT NULL,
-- Primary Key  ([account_id])
-- ) 
-- go

Create table [COMPANY] (
	[company_id] Uniqueidentifier NOT NULL default(newid()),
	[name] Nvarchar(255) NOT NULL,
	[location] Nvarchar(255) NOT NULL,
	[phone] Numeric(11,0) NOT NULL,
	[country] Nvarchar(255) NOT NULL,
Primary Key  ([company_id])
) 
go

Create table [USER] (
	[user_id] Uniqueidentifier NOT NULL default(newid()),
	[username] Varchar(255) NOT NULL,
	[password] Varchar(255) NOT NULL,
	[name] Nvarchar(255) NOT NULL,
	[email] Nvarchar(255) NOT NULL,
	[gender] Bit NOT NULL,
	[dob] Datetime NOT NULL,
	[address] Nvarchar(255) NOT NULL,
	[job] Nvarchar(255) NOT NULL,
	[icompany_id] Uniqueidentifier NOT NULL,
Primary Key  ([user_id])
) 
go

Create table [USER_TYPE] (
	[type_id] Uniqueidentifier NOT NULL default(newid()),
	[name] Nvarchar(255) NOT NULL,
Primary Key  ([type_id])
) 
go

Create table [REWARD] (
	[user_id] Uniqueidentifier NOT NULL default(newid()),
	[reward] Numeric(18,0) NOT NULL,
	[value] Numeric(18,0) NOT NULL,
Primary Key  ([user_id])
) 
go

Create table [SERVICE] (
	[company_id] Uniqueidentifier NOT NULL default(newid()),
	[service_name] Nvarchar(255) NOT NULL,
Primary Key  ([service_id])
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

insert into USER_TYPE
values (newid(), 'ADMIN')
insert into USER_TYPE
values (newid(), 'PARTNER')
insert into USER_TYPE
values (newid(), 'CUSTOMER')

insert into SERVICE
values (newid(), 'FLIGHT')
insert into SERVICE
values (newid(), 'HOTEL')
insert into SERVICE
values (newid(), 'AIRPORT PICKLES')
insert into SERVICE
values (newid(), 'VILLA APARTMENT')
insert into SERVICE
values (newid(), 'TOUR')
insert into SERVICE
values (newid(), 'CAR RENTAL')
insert into SERVICE
values (newid(), 'RESTAURANT')
insert into SERVICE
values (newid(), 'VOUCHER')
insert into SERVICE
values (newid(), 'SAVING COMBO')


insert into ACCOUNT
values(newid(), 'system_admin', '25d55ad283aa400af464c76d713c07ad', 'ADMIN')