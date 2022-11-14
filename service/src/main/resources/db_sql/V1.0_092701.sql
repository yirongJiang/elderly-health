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
	`institution` VARCHAR ( 50 ) NOT NULL COMMENT '1：四川大学华西医院、2：南京医科大学、3.中南大学湘雅医院',
	`hospital` VARCHAR ( 50 ) NOT NULL COMMENT '一年内是否住过院0：否、  1~n:住过，次数为n。',
	`fall` VARCHAR ( 50 ) NOT NULL COMMENT '一年内是否跌倒过0：否、  1~n:跌倒过，次数为n。',
	`illness` VARCHAR ( 50 ) NOT NULL COMMENT '疾病史0：无、其他数字：有。现有疾病供选择：（a:脑卒中、b:帕金森、c:阿尔兹海默、d:精神疾病、e:糖尿病周围神经病、f:颈椎病、g：腰椎间盘突出、h：髋/膝骨关节炎、i：类风湿性关节炎、j：髋部骨折、k：骨质疏松性骨折、l：冠心病、m：慢性心律失常、n：COPD、o：肺癌，p：其他：             ，）系统自动统计患病数量。
	例如：此病患患有：帕金森、冠心病、抑郁症（其他）。数据则保存为：b,l,p；',
	`illness_num` VARCHAR ( 50 ) NOT NULL COMMENT '疾病史（总量）保存患有疾病史的总数，无疾病史：0。
	例如：此病患患有：帕金森、冠心病、抑郁症（其他）。
	数据则保存为：3；',
	`illness_other` VARCHAR ( 50 ) NOT NULL COMMENT '疾病史（其他）默认为null，若疾病史有填写其他，则保存该字符串。
	例如：此病患患有：帕金森、冠心病、抑郁症（其他）。
	数据则保存为：抑郁症；',
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


DROP TABLE IF EXISTS `audition`;
CREATE TABLE `audition` (
                            `id` varchar(50) NOT NULL,
                            `q_one` varchar(1) NOT NULL COMMENT '是的：3，有时：2，不是：1',
                            `q_two` varchar(1) NOT NULL COMMENT '是的：3，有时：2，不是：1',
                            `q_three` varchar(1) NOT NULL COMMENT '是的：3，有时：2，不是：1',
                            `q_four` varchar(1) NOT NULL COMMENT '是的：3，有时：2，不是：1',
                            `q_five` varchar(1) NOT NULL COMMENT '是的：3，有时：2，不是：1',
                            `q_six` varchar(1) NOT NULL COMMENT '是的：3，有时：2，不是：1',
                            `q_seven` varchar(1) NOT NULL COMMENT '是的：3，有时：2，不是：1',
                            `q_eight` varchar(1) NOT NULL COMMENT '是的：3，有时：2，不是：1',
                            `q_nine` varchar(1) NOT NULL COMMENT '是的：3，有时：2，不是：1',
                            `q_ten` varchar(1) NOT NULL COMMENT '是的：3，有时：2，不是：1',
                            `create_date` datetime DEFAULT NULL COMMENT '创建时间',
                            `update_date` datetime DEFAULT NULL COMMENT '更新时间',
                            `user_id` varchar(50) DEFAULT NULL COMMENT '用户ID',
                            `del_flge` varchar(1) DEFAULT '0' COMMENT '是否有效,1有效，0无效',
                            PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;


DROP TABLE IF EXISTS `vision`;
CREATE TABLE `vision` (
                          `id` varchar(50) NOT NULL,
                          `q_one` varchar(1) NOT NULL COMMENT '是的：3，有时：2，不是：1',
                          `q_two` varchar(1) NOT NULL COMMENT '是的：3，有时：2，不是：1',
                          `q_three` varchar(1) NOT NULL COMMENT '是的：3，不是：1',
                          `q_four` varchar(1) NOT NULL COMMENT '是的：3，不是：1',
                          `q_five` varchar(1) NOT NULL COMMENT '是的：3，不是：1',
                          `create_date` datetime DEFAULT NULL COMMENT '创建时间',
                          `update_date` datetime DEFAULT NULL COMMENT '更新时间',
                          `user_id` varchar(50) DEFAULT NULL COMMENT '用户ID',
                          `del_flge` varchar(1) DEFAULT '0' COMMENT '是否有效,1有效，0无效',
                          PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

DROP TABLE IF EXISTS `pain`;
CREATE TABLE `pain` (
                        `id` varchar(50) NOT NULL,
                        `position_one` varchar(1) NOT NULL COMMENT '部位1的左、右、双侧，无：0，左：1，右：2，双侧：3',
                        `level_one` varchar(10) NOT NULL COMMENT '部位1的疼痛程度，疼痛程度表示为0~10分',
                        `position_two` varchar(1) NOT NULL COMMENT '部位2的左、右、双侧，无：0，左：1，右：2，双侧：3',
                        `level_two` varchar(10) NOT NULL COMMENT '部位2的疼痛程度，疼痛程度表示为0~10分',
                        `create_date` datetime DEFAULT NULL COMMENT '创建时间',
                        `update_date` datetime DEFAULT NULL COMMENT '更新时间',
                        `user_id` varchar(50) DEFAULT NULL COMMENT '用户ID',
                        `del_flge` varchar(1) DEFAULT '0' COMMENT '是否有效,1有效，0无效',
                        PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

DROP TABLE IF EXISTS `heart`;
CREATE TABLE `heart` (
                         `id` varchar(50) NOT NULL,
                         `q_one` varchar(1) NOT NULL COMMENT '是否有心脏相关的问题？严重程度划分：1、2、3、4',
                         `create_date` datetime DEFAULT NULL COMMENT '创建时间',
                         `update_date` datetime DEFAULT NULL COMMENT '更新时间',
                         `user_id` varchar(50) DEFAULT NULL COMMENT '用户ID',
                         `del_flge` varchar(1) DEFAULT '0' COMMENT '是否有效,1有效，0无效',
                         PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

DROP TABLE IF EXISTS `mmse`;
CREATE TABLE `mmse` (
                        `id` varchar(50) NOT NULL,
                        `q_one` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_two` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_three` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_four` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_five` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_six` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_seven` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_eight` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_nine` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_ten` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_eleven` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_twelve` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_thirteen` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_fourteen` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_fifteen` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_sixteen` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_seventeen` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_eighteen` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_nineteen` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_twenty` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_twenty_one` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_twenty_two` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_twenty_three` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_twenty_four` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_twenty_five` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_twenty_six` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_twenty_seven` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_twenty_eight` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_twenty_nine` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `q_thirty` varchar(1) NOT NULL COMMENT '1为回答正确，0为回答不正确',
                        `create_date` datetime DEFAULT NULL COMMENT '创建时间',
                        `update_date` datetime DEFAULT NULL COMMENT '更新时间',
                        `user_id` varchar(50) DEFAULT NULL COMMENT '用户ID',
                        `del_flge` varchar(1) DEFAULT '0' COMMENT '是否有效,1有效，0无效',
                        PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

DROP TABLE IF EXISTS `cognition_two`;
CREATE TABLE `cognition_two` (
                                 `id` varchar(50) NOT NULL,
                                 `finger_status` varchar(1) NOT NULL COMMENT '是否在画图落手状态,0：抬起状态，1：手指触摸屏幕状态',
                                 `gravity_angx` FLOAT ( 5, 2 ) NOT NULL COMMENT '重力传感器采集的x轴角度，单位：°',
														 `gravity_angy` FLOAT ( 5, 2 ) NOT NULL COMMENT '重力传感器采集的y轴角度，单位：°',
														 `gravity_angz` FLOAT ( 5, 2 ) NOT NULL COMMENT '重力传感器采集的z轴角度，单位：°',
														 `speed_angx` FLOAT ( 5, 2 ) NOT NULL COMMENT '加速度传感器的x轴加速度，单位：cm/单位时间',
														 `speed_angy` FLOAT ( 5, 2 ) NOT NULL COMMENT '加速度传感器的y轴加速度，单位：cm/单位时间',
														 `speed_angz` FLOAT ( 5, 2 ) NOT NULL COMMENT '加速度传感器的z轴加速度，单位：cm/单位时间',
														 `gyroscope_angx` FLOAT ( 5, 2 ) NOT NULL COMMENT '陀螺仪的x轴角加速度,单位：°/单位时间',
														 `gyroscope_angy` FLOAT ( 5, 2 ) NOT NULL COMMENT '陀螺仪的y轴角加速度,单位：°/单位时间',
														 `gyroscope_angz` FLOAT ( 5, 2 ) NOT NULL COMMENT '陀螺仪的z轴角加速度,单位：°/单位时间',
														 `pressure` FLOAT ( 5, 2 ) NOT NULL COMMENT '屏幕压力传感器，压力值，单位：hPa/单位时间',
														 `collect_time` datetime DEFAULT NULL COMMENT '时间。*【50】ms采集一次',
														 `collect_long` FLOAT ( 5, 2 ) DEFAULT NULL COMMENT '绘制累积长度*（手指起始点、通过画板取tap坐标）',
                             `create_date` datetime DEFAULT NULL COMMENT '创建时间',
                             `update_date` datetime DEFAULT NULL COMMENT '更新时间',
                             `user_id` varchar(50) DEFAULT NULL COMMENT '用户ID',
                             `del_flge` varchar(1) DEFAULT '0' COMMENT '是否有效,1有效，0无效',
                             PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;