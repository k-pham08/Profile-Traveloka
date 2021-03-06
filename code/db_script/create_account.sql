use master
go

if exists (select 1 from SYS.DATABASES where name = N'Profile')
	drop database Profile

go

create database [Profile]

go

use [Profile]

go

Create table [USER] (
	[user_id] Uniqueidentifier NOT NULL,
	[username] Varchar(255) NOT NULL,
	[password] Varchar(255) NOT NULL,
	[name] Nvarchar(255) NOT NULL,
	[email] Nvarchar(255) NOT NULL,
	[gender] Bit NOT NULL,
	[dob] datetime,
	[phone] char(10) NOT NULL,
	[address] Nvarchar(255) NOT NULL,
	[type] Nvarchar(255) NOT NULL,
	[reward] Integer NOT NULL,
	[company_name] Nvarchar(255) NULL,
Primary Key  ([user_id])
) 
go

Create table [SERVICE] (
	[service_id] Uniqueidentifier NOT NULL,
	[service_code] Varchar(255) NOT NULL,
	[service_name] Nvarchar(255) NOT NULL
Primary Key  ([service_id])
) 

go

Create table [SERVICE_CLASSIFY] (
	[classify_id] Uniqueidentifier NOT NULL,
	[classify_code] Nvarchar(255) NOT NULL,
	[max_price] Integer NOT NULL,
	[min_price] Integer NOT NULL,
	[service_id] Uniqueidentifier NOT NULL,
Primary Key  ([classify_id])
) 
go

CREATE TABLE [dbo].[ORDER](
	[order_id] [uniqueidentifier] NOT NULL,
	[created_at] [datetime] NOT NULL,
	[total] [int] NOT NULL,
	[reward] [int] NOT NULL,
	[voucher_code] [nvarchar](255) NOT NULL,
	[partner_id] [uniqueidentifier] NULL,
	[user_id] [uniqueidentifier] NULL,
Primary Key ([order_id])
)
GO

CREATE TABLE [dbo].[ORDER_DETAIL](
	[detail_id] [uniqueidentifier] NOT NULL,
	[product_name] [nvarchar](255) NOT NULL,
	[quantity] [int] NOT NULL,
	[price] [int] NOT NULL,
	[thumbnail] [nvarchar](255) NULL,
	[link] [nvarchar](255) NULL,
	[order_id] [uniqueidentifier] NULL,
Primary Key ([detail_id])
)
GO



Alter table [SERVICE_CLASSIFY] add  foreign key([service_id]) references [SERVICE] ([service_id]) 
go

Alter table [ORDER] add  foreign key([user_id]) references [USER] ([user_id]) 
go

Alter table [ORDER] add  foreign key([partner_id]) references [USER] ([user_id]) 
go

Alter table [ORDER_DETAIL] add  foreign key([order_id]) references [ORDER] ([order_id]) 
go

INSERT [dbo].[SERVICE] ([service_id], [service_code], [service_name]) VALUES (N'97dc9c1f-ef58-41b6-8f91-12fc7ab3cf09', N'VILLA-APARTMENT', N'Bi???t th??? - C??n h???')
INSERT [dbo].[SERVICE] ([service_id], [service_code], [service_name]) VALUES (N'eaeaacf3-3ba7-4bba-916b-2b0c108c57bc', N'FLIGHT', N'Chuy???n ba')
INSERT [dbo].[SERVICE] ([service_id], [service_code], [service_name]) VALUES (N'e2d5a703-128b-48df-8473-43b9b8629f14', N'CAR-RENTAL', N'Cho thu?? xe')
INSERT [dbo].[SERVICE] ([service_id], [service_code], [service_name]) VALUES (N'1142ab4a-9323-4c12-b673-7c829ef0d9ea', N'AIRPORT-PICKLES', N'D??a ????n s??n bay')
INSERT [dbo].[SERVICE] ([service_id], [service_code], [service_name]) VALUES (N'a044fb78-dbc2-423e-b520-818729501398', N'HOTEL', N'Kh??ch s???n')
INSERT [dbo].[SERVICE] ([service_id], [service_code], [service_name]) VALUES (N'63726423-b591-4f1c-8837-aa65c0579fc7', N'TOUR', N'Tour du l???ch')
INSERT [dbo].[SERVICE] ([service_id], [service_code], [service_name]) VALUES (N'953b504b-86b1-4018-9e95-bde29518364d', N'RESTAURANT', N'Nh?? h??ng')
INSERT [dbo].[SERVICE] ([service_id], [service_code], [service_name]) VALUES (N'e91bf9c5-4dc9-4f0f-b8ec-d059582e3655', N'VOUCHER', N'Voucher')
INSERT [dbo].[SERVICE] ([service_id], [service_code], [service_name]) VALUES (N'5771be02-6b90-4ff5-87d6-ee59a6d86b7f', N'SAVING-COMBO', N'Combo ti???t ki???m')

// FK_5a030c73bbf2cef0568e1e9d4c3

INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [max_price], [min_price], [service_id]) VALUES (N'ef84df2b-23c0-42f2-8287-0b71c3cf8bf1', N'APARTMENT', 100000000, 500000, N'97dc9c1f-ef58-41b6-8f91-12fc7ab3cf09')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [max_price], [min_price], [service_id]) VALUES (N'5b195c7a-e363-4443-a35e-0e2fb907a9f1', N'GENERAL', 100000000, 500000, N'eaeaacf3-3ba7-4bba-916b-2b0c108c57bc')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [max_price], [min_price], [service_id]) VALUES (N'4a373a46-60ad-4ee2-88b4-16c5dd0b5f1c', N'M-CARS', 100000000, 500000, N'e2d5a703-128b-48df-8473-43b9b8629f14')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [max_price], [min_price], [service_id]) VALUES (N'c41cbec1-62f7-43af-b48c-18114feec590', N'SINGLE', 100000000, 500000, N'953b504b-86b1-4018-9e95-bde29518364d')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [max_price], [min_price], [service_id]) VALUES (N'4d2c3c5f-523f-4165-8c8f-2513d18eabab', N'BUSINESS-VIP', 100000000, 500000, N'5771be02-6b90-4ff5-87d6-ee59a6d86b7f')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [max_price], [min_price], [service_id]) VALUES (N'93ba2671-e9f0-4f34-959e-37060cb3d748', N'L-CARS', 100000000, 500000, N'e2d5a703-128b-48df-8473-43b9b8629f14')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [max_price], [min_price], [service_id]) VALUES (N'1ae77c10-e277-443c-81ad-3ef05e70cc47', N'GENERAL-VIP', 100000000, 500000, N'5771be02-6b90-4ff5-87d6-ee59a6d86b7f')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [max_price], [min_price], [service_id]) VALUES (N'c413a13b-58b8-416c-b42e-69c69b624d18', N'S-CARS', 100000000, 500000, N'e2d5a703-128b-48df-8473-43b9b8629f14')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [max_price], [min_price], [service_id]) VALUES (N'049b9990-34ff-4c2d-a32e-801f707df169', N'BUSINESS-NORMAL', 100000000, 500000, N'5771be02-6b90-4ff5-87d6-ee59a6d86b7f')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [max_price], [min_price], [service_id]) VALUES (N'7b9db1f1-daa1-429e-b84b-9235c1ece445', N'BUSINESS', 100000000, 500000, N'eaeaacf3-3ba7-4bba-916b-2b0c108c57bc')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [max_price], [min_price], [service_id]) VALUES (N'ec5d1a47-a15c-475f-8fcc-d1ab3ec2fb47', N'VILLA', 100000000, 500000, N'97dc9c1f-ef58-41b6-8f91-12fc7ab3cf09')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [max_price], [min_price], [service_id]) VALUES (N'af13c289-8b4c-420f-b1a3-e3fcf7822aa1', N'GENERAL-NORMAL', 100000000, 500000, N'5771be02-6b90-4ff5-87d6-ee59a6d86b7f')
INSERT [dbo].[SERVICE_CLASSIFY] ([classify_id], [classify_code], [max_price], [min_price], [service_id]) VALUES (N'150f5702-17dc-4850-a424-e7ae6b8238c7', N'FAMILY', 100000000, 500000, N'953b504b-86b1-4018-9e95-bde29518364d')
GO


insert into [dbo].[USER]([user_id], username, [password], [name], email, gender, dob, phone, [address], type, reward)
values('3A8C5CC5-A5F9-46CA-B657-2C033252CA60', 'system_admin', '25d55ad283aa400af464c76d713c07ad', 'SA', 'admin@traveloka.com', 0, '2001-04-27 01:48:31.060', '0942458283','824 su van hanh', 'ADMIN', 99999);

insert into [dbo].[USER]([user_id], username, [password], [name], email, gender, dob, phone, [address], type, reward)
values('F5FAF674-B980-4798-83AE-D25121A838FE', 'vinhphan812', '25d55ad283aa400af464c76d713c07ad', 'Vinh Phan', 'vinhphan812@gmail.com', 0, '2001-04-27 01:48:31.060', '0975947316','824 su van hanh', 'USER', 0);

insert into [dbo].[USER]([user_id], username, [password], [name], email, gender, dob, phone, [address], type, reward)
values('0E011163-C8BA-4DA3-AFE2-81CAF4D1966B', 'phanvinh637', '25d55ad283aa400af464c76d713c07ad', 'Phan Thanh Vinh', 'phanvinh637@gmail.com', 0, '2001-04-27 01:48:31.060', '0975947317','824 su van hanh', 'PARTNER', 0);

insert into [dbo].[USER]([user_id], username, [password], [name], email, gender, dob, phone, [address], type, reward, company_name)
values('21F245C1-913B-47D8-9683-160DFA670898', 'partner', '25d55ad283aa400af464c76d713c07ad', 'Partner Test', 'partner.test@gmail.com', 0, '2001-04-27 01:48:31.060', '0942532812','824 su van hanh', 'PARTNER', 0, 'Vinh Group');

INSERT [dbo].[user_services_service] ([sERVICEServiceId], [uSERUserId]) VALUES (N'97dc9c1f-ef58-41b6-8f91-12fc7ab3cf09', '21F245C1-913B-47D8-9683-160DFA670898')
INSERT [dbo].[user_services_service] ([sERVICEServiceId], [uSERUserId]) VALUES (N'eaeaacf3-3ba7-4bba-916b-2b0c108c57bc', '21F245C1-913B-47D8-9683-160DFA670898')
INSERT [dbo].[user_services_service] ([sERVICEServiceId], [uSERUserId]) VALUES (N'e2d5a703-128b-48df-8473-43b9b8629f14', '21F245C1-913B-47D8-9683-160DFA670898')
INSERT [dbo].[user_services_service] ([sERVICEServiceId], [uSERUserId]) VALUES (N'1142ab4a-9323-4c12-b673-7c829ef0d9ea', '21F245C1-913B-47D8-9683-160DFA670898')
INSERT [dbo].[user_services_service] ([sERVICEServiceId], [uSERUserId]) VALUES (N'a044fb78-dbc2-423e-b520-818729501398', '21F245C1-913B-47D8-9683-160DFA670898')
INSERT [dbo].[user_services_service] ([sERVICEServiceId], [uSERUserId]) VALUES (N'63726423-b591-4f1c-8837-aa65c0579fc7', '21F245C1-913B-47D8-9683-160DFA670898')
INSERT [dbo].[user_services_service] ([sERVICEServiceId], [uSERUserId]) VALUES (N'953b504b-86b1-4018-9e95-bde29518364d', '21F245C1-913B-47D8-9683-160DFA670898')
INSERT [dbo].[user_services_service] ([sERVICEServiceId], [uSERUserId]) VALUES (N'e91bf9c5-4dc9-4f0f-b8ec-d059582e3655', '21F245C1-913B-47D8-9683-160DFA670898')
INSERT [dbo].[user_services_service] ([sERVICEServiceId], [uSERUserId]) VALUES (N'5771be02-6b90-4ff5-87d6-ee59a6d86b7f', '21F245C1-913B-47D8-9683-160DFA670898')
GO


select newid()

select * from [USER]