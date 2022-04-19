Create table [Account] (
	[account_id] Uniqueidentifier NOT NULL default(newid()),
	[username] varchar(10) NULL,
	[password] varchar(10) NULL,
	[type] varchar(10) NULL,
Primary Key  ([account_id])
) 
go

Create table [Customer] (
	[customer_id] Uniqueidentifier NOT NULL default(newid()),
	[name] Nvarchar(255) NULL,
	[gender] Bit NULL,
	[birthday] Datetime NULL,
	[address] Nvarchar(255) NULL,
	[email] varchar(255) NULL,
	[phone] Numeric(11,0) NULL,
	[account_id] Uniqueidentifier NOT NULL,
Primary Key  ([customer_id])
) 
go

Create table [Partner] (
	[partner_id] Uniqueidentifier NOT NULL default(newid()),
	[name] Nvarchar(255) NULL,
	[phone] Numeric(11,0) NULL,
	[email] varchar(255) NULL,
	[job] Nvarchar(255) NULL,
	[company_name] Nvarchar(255) NULL,
	[country] Nvarchar(255) NULL,
	[office_address] Nvarchar(255) NULL,
	[office_phone] Numeric(11,0) NULL,
	[account_id] Uniqueidentifier NOT NULL,
Primary Key  ([partner_id])
) 
go


ALTER TABLE Customer
ADD CONSTRAINT fk_account_customer
FOREIGN KEY (customer_id) REFERENCES Account

ALTER TABLE Partner
ADD CONSTRAINT fk_account_partner
FOREIGN KEY (partner_id) REFERENCES Account

