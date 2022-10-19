SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cognition
-- ----------------------------
DROP TABLE IF EXISTS `cognition`;
CREATE TABLE `cognition` (
                             `id` varchar(50) NOT NULL,
                             `answer_time` varchar(1) NOT NULL COMMENT '时间问题，1：是，0：否',
                             `answer_stone` varchar(1) NOT NULL COMMENT '石头问题，1：是，0：否',
                             `photo_clock` text DEFAULT NULL COMMENT '时钟照片',
                             `draw_clock` text DEFAULT NULL COMMENT '时钟手绘',
                             `create_date` datetime DEFAULT NULL COMMENT '创建时间',
                             `update_date` datetime DEFAULT NULL COMMENT '更新时间',
                             `user_id` varchar(50) DEFAULT NULL COMMENT '用户ID',
                             `del_flge` varchar(1) DEFAULT '0' COMMENT '是否有效,1有效，0无效',
                             PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

CREATE TABLE `user` (
                        `id` varchar(50) NOT NULL,
                        `user_id` varchar(100) NOT NULL COMMENT '用户id',
                        `user_name` varchar(100) NOT NULL COMMENT '用户名',
                        `pass_word` varchar(100) NOT NULL COMMENT '密码',
                        `phone` varchar(20) NOT NULL COMMENT '电话号码',
                        `role` varchar(1) NOT NULL COMMENT '用户权限，0：医生用户；1：普通用户',
                        `create_date` datetime DEFAULT NULL COMMENT '创建时间',
                        `update_date` datetime DEFAULT NULL COMMENT '更新时间',
                        `del_flge` varchar(1) DEFAULT '0' COMMENT '是否有效,1有效，0无效',
                        PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;


DROP TABLE IF EXISTS `bi`;
CREATE TABLE `bi` (
                      `id` varchar(50) NOT NULL,
                      `q_one` varchar(1) NOT NULL COMMENT '进食,由自理到依赖分为1、2、3',
                      `q_two` varchar(1) NOT NULL COMMENT '转移，由自理到依赖分为1、2、3、4',
                      `q_three` varchar(1) NOT NULL COMMENT '修饰，由自理到依赖分为1、2',
                      `q_four` varchar(1) NOT NULL COMMENT '如厕，由自理到依赖分为1、2、3',
                      `q_five` varchar(1) NOT NULL COMMENT '洗澡，由自理到依赖分为1、2',
                      `q_six` varchar(1) NOT NULL COMMENT '行45m，由自理到依赖分为1、2、3、4',
                      `q_seven` varchar(1) NOT NULL COMMENT '上下楼梯，由自理到依赖分为1、2、3',
                      `q_eight` varchar(1) NOT NULL COMMENT '穿衣，由自理到依赖分为1、2、3',
                      `q_nine` varchar(1) NOT NULL COMMENT '大便控制，由自理到依赖分为1、2、3',
                      `q_ten` varchar(1) NOT NULL COMMENT '小便控制，由自理到依赖分为1、2、3',
                      `create_date` datetime DEFAULT NULL COMMENT '创建时间',
                      `update_date` datetime DEFAULT NULL COMMENT '更新时间',
                      `user_id` varchar(50) DEFAULT NULL COMMENT '用户ID',
                      `del_flge` varchar(1) DEFAULT '0' COMMENT '是否有效,1有效，0无效',
                      PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

DROP TABLE
    IF
    EXISTS `user_info`;
CREATE TABLE `user_info` (
                             `id` VARCHAR ( 50 ) NOT NULL,
                             `user_id` VARCHAR ( 50 ) NOT NULL COMMENT '用户ID',
                             `name` VARCHAR ( 255 ) NOT NULL COMMENT '测试者姓名',
                             `gender` VARCHAR ( 2 ) NOT NULL COMMENT '测试者性别,1:男，0：女',
                             `height` FLOAT ( 5, 2 ) NOT NULL COMMENT '测试者身高',
	`weight` FLOAT ( 5, 2 ) NOT NULL COMMENT '测试者体重',
	`age` INT NOT NULL COMMENT '测试者年龄，分区间(55-60/60-65/65-70/70-75/75-80/80以上)',
	`matrim` VARCHAR ( 50 ) NOT NULL COMMENT '测试者婚姻状况0:未婚，1：已婚，2：离异，3丧偶',
	`edu` VARCHAR ( 50 ) NOT NULL COMMENT '测试者文化程度',
	`disease` VARCHAR ( 255 ) NOT NULL COMMENT '测试者基础疾病（多选）',
	`org` VARCHAR ( 255 ) NOT NULL COMMENT '测试者所在的医院机构',
	`place` VARCHAR ( 255 ) NOT NULL COMMENT '测试者测试地点（门诊、住院、家里...）',
	`staff` VARCHAR ( 50 ) NOT NULL COMMENT '填写人员（0：本人:1：医务人员...）',
	`create_date` datetime DEFAULT NULL COMMENT '创建时间',
	`update_date` datetime DEFAULT NULL COMMENT '更新时间',
	`del_flge` VARCHAR ( 1 ) DEFAULT '0' COMMENT '是否有效,1有效，0无效',
PRIMARY KEY ( `id` ) USING BTREE
) ENGINE = INNODB DEFAULT CHARSET = utf8 ROW_FORMAT = DYNAMIC;


DROP TABLE IF EXISTS `iadl`;
CREATE TABLE `iadl` (
                        `id` varchar(50) NOT NULL,
                        `q_one` varchar(1) NOT NULL COMMENT '电话的使用,由自理能到不能自己做分为1、2、3',
                        `q_two` varchar(1) NOT NULL COMMENT '交通的使用，由自理能到不能自己做分为1、2、3',
                        `q_three` varchar(1) NOT NULL COMMENT '购物，由自理能到不能自己做分为1、2、3',
                        `q_four` varchar(1) NOT NULL COMMENT '准备食物，由自理能到不能自己做分为1、2、3',
                        `q_five` varchar(1) NOT NULL COMMENT '家务活动，由自理能到不能自己做分为1、2、3',
                        `q_six` varchar(1) NOT NULL COMMENT '家居维修，由自理能到不能自己做分为1、2、3',
                        `q_seven` varchar(1) NOT NULL COMMENT '卫生，由自理能到不能自己做分为1、2、3',
                        `q_eight` varchar(1) NOT NULL COMMENT '服药，由自理能到不能自己做分为1、2、3',
                        `q_nine` varchar(1) NOT NULL COMMENT '财务管理，由自理能到不能自己做分为1、2、3',
                        `create_date` datetime DEFAULT NULL COMMENT '创建时间',
                        `update_date` datetime DEFAULT NULL COMMENT '更新时间',
                        `user_id` varchar(50) DEFAULT NULL COMMENT '用户ID',
                        `del_flge` varchar(1) DEFAULT '0' COMMENT '是否有效,1有效，0无效',
                        PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;