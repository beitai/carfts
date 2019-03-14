/*
 Navicat SQL Server Data Transfer

 Source Server         : localhost
 Source Server Type    : SQL Server
 Source Server Version : 10501600
 Source Host           : (local)\SQLEXPRESS:1433
 Source Catalog        : GloryProcess
 Source Schema         : dbo

 Target Server Type    : SQL Server
 Target Server Version : 10501600
 File Encoding         : 65001

 Date: 19/02/2019 15:54:14
*/


-- ----------------------------
-- Table structure for product_process
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[product_process]') AND type IN ('U'))
	DROP TABLE [dbo].[product_process]
GO

CREATE TABLE [dbo].[product_process] (
  [id] int  IDENTITY(1,1) NOT NULL,
  [u9_coding] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [product_model] varchar(255) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [customer] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [version] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [file_coding] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [issue_coding] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [issue_date] datetime DEFAULT NULL NULL,
  [update_date] datetime DEFAULT NULL NULL,
  [spraying_color] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [steel_seal] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [move_seal] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [pof_plastic_products] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [box_plastic] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [case_plastic] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [box1_label] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [box1_num] int DEFAULT NULL NULL,
  [box2_label] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [box2_num] int DEFAULT NULL NULL,
  [case1_label] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [case1_num] int DEFAULT NULL NULL,
  [case2_label] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [case2_num] int DEFAULT NULL NULL,
  [instructions] varchar(1024) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [qualified_certificate] varchar(255) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [sealing_paste] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [packaging_tape] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [packaging_tape_number] int DEFAULT NULL NULL,
  [sealing_gummed_paper] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [shell_fabric] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [bed_charge] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [box_number] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [case_number] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [child_thing_number] varchar(64) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [crt_time] datetime DEFAULT NULL NULL,
  [crt_user] varchar(255) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [crt_name] varchar(255) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [crt_host] varchar(255) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [upd_time] datetime DEFAULT NULL NULL,
  [upd_user] varchar(255) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [upd_name] varchar(255) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [upd_host] varchar(255) COLLATE Chinese_PRC_CI_AS DEFAULT NULL NULL,
  [status] int DEFAULT ((1)) NULL,
  [bubble_with] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [paper_tube] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [remark] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [process1_picture_path] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [process2_picture_path] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [process3_picture_path] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [process4_picture_path] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [box3_label] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [box3_num] int  NULL,
  [box4_label] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [box4_num] int  NULL,
  [case3_label] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [case3_num] int  NULL,
  [case4_label] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL,
  [case4_num] int  NULL,
  [clapboard] varchar(255) COLLATE Chinese_PRC_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[product_process] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Primary Key structure for table product_process
-- ----------------------------
ALTER TABLE [dbo].[product_process] ADD CONSTRAINT [PK__product___3213E83F2E1BDC42] PRIMARY KEY CLUSTERED ([id])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO

