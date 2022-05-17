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
	[phone] char(10) NOT NULL,
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
	[phone] char(10) NOT NULL,
	[address] Nvarchar(255) NOT NULL,
	[job] Nvarchar(255),
	[type] Nvarchar(255) NOT NULL,
	[reward] Numeric(18,0) NOT NULL,
	[company_id] Uniqueidentifier,
Primary Key  ([user_id])
) 
go


Create table [SERVICE] (
	[service_id] Uniqueidentifier NOT NULL default(newid()),
	[service_code] Nvarchar(255) NOT NULL,
Primary Key  ([service_id])
) 
go

Create table [SERVICE_CLASSIFY] (
	[classify_id] Uniqueidentifier NOT NULL default(newid()),
	[classify_code] Nvarchar(255) NOT NULL,
	[serviceId] Uniqueidentifier NOT NULL
Primary Key  ([classify_id])
) 
go

Create table [PRICE_BRACKET] (
	[bracket_id] Uniqueidentifier NOT NULL default(newid()),
	[max_price] Numeric(20,0) NOT NULL,
	[min_price] Numeric(20,0) NOT NULL
Primary Key  ([bracket_id])
) 
go


-- insert into [SERVICE]
-- values (newid(), 'FLIGHT')
-- insert into SERVICE
-- values (newid(), 'HOTEL')
-- insert into SERVICE
-- values (newid(), 'AIRPORT PICKLES')
-- insert into SERVICE
-- values (newid(), 'VILLA APARTMENT')
-- insert into SERVICE
-- values (newid(), 'TOUR')
-- insert into SERVICE
-- values (newid(), 'CAR RENTAL')
-- insert into SERVICE
-- values (newid(), 'RESTAURANT')
-- insert into SERVICE
-- values (newid(), 'VOUCHER')
-- insert into SERVICE
-- values (newid(), 'SAVING COMBO')

INSERT [dbo].[SERVICE] ([service_id], [service_code]) VALUES (N'97dc9c1f-ef58-41b6-8f91-12fc7ab3cf09', N'VILLA-APARTMENT')
INSERT [dbo].[SERVICE] ([service_id], [service_code]) VALUES (N'eaeaacf3-3ba7-4bba-916b-2b0c108c57bc', N'FLIGHT')
INSERT [dbo].[SERVICE] ([service_id], [service_code]) VALUES (N'e2d5a703-128b-48df-8473-43b9b8629f14', N'CAR-RENTAL')
INSERT [dbo].[SERVICE] ([service_id], [service_code]) VALUES (N'1142ab4a-9323-4c12-b673-7c829ef0d9ea', N'AIRPORT-PICKLES')
INSERT [dbo].[SERVICE] ([service_id], [service_code]) VALUES (N'a044fb78-dbc2-423e-b520-818729501398', N'HOTEL')
INSERT [dbo].[SERVICE] ([service_id], [service_code]) VALUES (N'63726423-b591-4f1c-8837-aa65c0579fc7', N'TOUR')
INSERT [dbo].[SERVICE] ([service_id], [service_code]) VALUES (N'953b504b-86b1-4018-9e95-bde29518364d', N'RESTAURANT')
INSERT [dbo].[SERVICE] ([service_id], [service_code]) VALUES (N'e91bf9c5-4dc9-4f0f-b8ec-d059582e3655', N'VOUCHER')
INSERT [dbo].[SERVICE] ([service_id], [service_code]) VALUES (N'5771be02-6b90-4ff5-87d6-ee59a6d86b7f', N'SAVING-COMBO')
GO
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [serviceId]) VALUES (N'ef84df2b-23c0-42f2-8287-0b71c3cf8bf1', N'APARTMENT', N'97dc9c1f-ef58-41b6-8f91-12fc7ab3cf09')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [serviceId]) VALUES (N'5b195c7a-e363-4443-a35e-0e2fb907a9f1', N'GENERAL', N'eaeaacf3-3ba7-4bba-916b-2b0c108c57bc')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [serviceId]) VALUES (N'4a373a46-60ad-4ee2-88b4-16c5dd0b5f1c', N'M-CARS', N'e2d5a703-128b-48df-8473-43b9b8629f14')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [serviceId]) VALUES (N'c41cbec1-62f7-43af-b48c-18114feec590', N'SINGLE', N'953b504b-86b1-4018-9e95-bde29518364d')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [serviceId]) VALUES (N'4d2c3c5f-523f-4165-8c8f-2513d18eabab', N'BUSINESS-VIP', N'5771be02-6b90-4ff5-87d6-ee59a6d86b7f')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [serviceId]) VALUES (N'93ba2671-e9f0-4f34-959e-37060cb3d748', N'L-CARS', N'e2d5a703-128b-48df-8473-43b9b8629f14')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [serviceId]) VALUES (N'1ae77c10-e277-443c-81ad-3ef05e70cc47', N'GENERAL-VIP', N'5771be02-6b90-4ff5-87d6-ee59a6d86b7f')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [serviceId]) VALUES (N'c413a13b-58b8-416c-b42e-69c69b624d18', N'S-CARS', N'e2d5a703-128b-48df-8473-43b9b8629f14')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [serviceId]) VALUES (N'049b9990-34ff-4c2d-a32e-801f707df169', N'BUSINESS-NORMAL', N'5771be02-6b90-4ff5-87d6-ee59a6d86b7f')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [serviceId]) VALUES (N'7b9db1f1-daa1-429e-b84b-9235c1ece445', N'BUSINESS', N'eaeaacf3-3ba7-4bba-916b-2b0c108c57bc')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [serviceId]) VALUES (N'ec5d1a47-a15c-475f-8fcc-d1ab3ec2fb47', N'VILLA', N'97dc9c1f-ef58-41b6-8f91-12fc7ab3cf09')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [serviceId]) VALUES (N'af13c289-8b4c-420f-b1a3-e3fcf7822aa1', N'GENERAL-NORMAL', N'5771be02-6b90-4ff5-87d6-ee59a6d86b7f')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [serviceId]) VALUES (N'150f5702-17dc-4850-a424-e7ae6b8238c7', N'FAMILY', N'953b504b-86b1-4018-9e95-bde29518364d')
GO
INSERT [dbo].[PRICE_BRACKET] ([bracket_id], [max_price], [min_price], [serClassifyId]) VALUES (N'8ea204f0-21ca-47dc-9e76-10c0f2d83e8a', CAST(80000000 AS Numeric(20, 0)), CAST(5000000 AS Numeric(20, 0)), N'1ae77c10-e277-443c-81ad-3ef05e70cc47')
INSERT [dbo].[PRICE_BRACKET] ([bracket_id], [max_price], [min_price], [serClassifyId]) VALUES (N'2d4d92a0-8bdf-4c30-92b9-16d766f2d08f', CAST(50000000 AS Numeric(20, 0)), CAST(1000000 AS Numeric(20, 0)), N'7b9db1f1-daa1-429e-b84b-9235c1ece445')
INSERT [dbo].[PRICE_BRACKET] ([bracket_id], [max_price], [min_price], [serClassifyId]) VALUES (N'4810ec64-c15e-466c-b7ec-31bc7c664802', CAST(50000000 AS Numeric(20, 0)), CAST(5000000 AS Numeric(20, 0)), N'af13c289-8b4c-420f-b1a3-e3fcf7822aa1')
INSERT [dbo].[PRICE_BRACKET] ([bracket_id], [max_price], [min_price], [serClassifyId]) VALUES (N'b7e870d5-3000-49ed-b87d-4a5ec15956c1', CAST(500000000 AS Numeric(20, 0)), CAST(50000000 AS Numeric(20, 0)), N'4d2c3c5f-523f-4165-8c8f-2513d18eabab')
INSERT [dbo].[PRICE_BRACKET] ([bracket_id], [max_price], [min_price], [serClassifyId]) VALUES (N'b3e38b28-5975-4e6b-b01b-645d11c0f80f', CAST(10000000 AS Numeric(20, 0)), CAST(500000 AS Numeric(20, 0)), N'ef84df2b-23c0-42f2-8287-0b71c3cf8bf1')
INSERT [dbo].[PRICE_BRACKET] ([bracket_id], [max_price], [min_price], [serClassifyId]) VALUES (N'1973a880-e012-41bc-99b3-6fdcfd20ee16', CAST(800000 AS Numeric(20, 0)), CAST(100000 AS Numeric(20, 0)), N'c413a13b-58b8-416c-b42e-69c69b624d18')
INSERT [dbo].[PRICE_BRACKET] ([bracket_id], [max_price], [min_price], [serClassifyId]) VALUES (N'5fb56cf1-a26a-4f21-badb-8be9fe227c85', CAST(1500000 AS Numeric(20, 0)), CAST(500000 AS Numeric(20, 0)), N'4a373a46-60ad-4ee2-88b4-16c5dd0b5f1c')
INSERT [dbo].[PRICE_BRACKET] ([bracket_id], [max_price], [min_price], [serClassifyId]) VALUES (N'e3c988bc-b456-4261-ac6d-be6e68a1b39b', CAST(3000000 AS Numeric(20, 0)), CAST(100000 AS Numeric(20, 0)), N'c41cbec1-62f7-43af-b48c-18114feec590')
INSERT [dbo].[PRICE_BRACKET] ([bracket_id], [max_price], [min_price], [serClassifyId]) VALUES (N'9807355e-2ae3-4200-98d0-e0f7c25c7309', CAST(50000000 AS Numeric(20, 0)), CAST(1000000 AS Numeric(20, 0)), N'ec5d1a47-a15c-475f-8fcc-d1ab3ec2fb47')
INSERT [dbo].[PRICE_BRACKET] ([bracket_id], [max_price], [min_price], [serClassifyId]) VALUES (N'9f6bdeaa-064d-4d1a-a929-e7ae071b9aff', CAST(10000000 AS Numeric(20, 0)), CAST(500000 AS Numeric(20, 0)), N'150f5702-17dc-4850-a424-e7ae6b8238c7')
INSERT [dbo].[PRICE_BRACKET] ([bracket_id], [max_price], [min_price], [serClassifyId]) VALUES (N'5015a0ea-5bc2-4521-a554-ed0d61e77718', CAST(3000000 AS Numeric(20, 0)), CAST(800000 AS Numeric(20, 0)), N'93ba2671-e9f0-4f34-959e-37060cb3d748')
INSERT [dbo].[PRICE_BRACKET] ([bracket_id], [max_price], [min_price], [serClassifyId]) VALUES (N'18e01c79-ec79-43df-a8f7-f036eaddff6e', CAST(150000000 AS Numeric(20, 0)), CAST(10000000 AS Numeric(20, 0)), N'049b9990-34ff-4c2d-a32e-801f707df169')
INSERT [dbo].[PRICE_BRACKET] ([bracket_id], [max_price], [min_price], [serClassifyId]) VALUES (N'fc2c228c-450b-49a0-a51d-f0d1e98b3897', CAST(10000000 AS Numeric(20, 0)), CAST(500000 AS Numeric(20, 0)), N'5b195c7a-e363-4443-a35e-0e2fb907a9f1')
GO

insert into [dbo].[USER]([user_id], username, [password], [name], email, gender,dob, phone, [address], job, type, reward)
values('3A8C5CC5-A5F9-46CA-B657-2C033252CA60', 'system_admin', '25d55ad283aa400af464c76d713c07ad', 'SA', 'admin@traveloka.com', 1, '2001-04-27 01:48:31.060', '0942458283','824 su van hanh', 'system admin', 'ADMIN', 99999);

insert into [dbo].[USER]([user_id], username, [password], [name], email, gender,dob, phone, [address], job, type, reward)
values('F5FAF674-B980-4798-83AE-D25121A838FE', 'vinhphan812', '25d55ad283aa400af464c76d713c07ad', 'Vinh Phan', 'vinhphan812@gmail.com', 1, '2001-04-27 01:48:31.060', '0975947316','824 su van hanh', null, 'USER', 0);

select newid()

select * from [USER]