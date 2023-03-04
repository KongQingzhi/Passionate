/*
Navicat MySQL Data Transfer

Source Server         : kong
Source Server Version : 50151
Source Host           : localhost:3306
Source Database       : passionate

Target Server Type    : MYSQL
Target Server Version : 50151
File Encoding         : 65001

Date: 2022-12-28 08:18:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `ArticleId` int(255) NOT NULL AUTO_INCREMENT,
  `ArticleTitle` varchar(20) NOT NULL,
  `ArticleImage` varchar(3000) NOT NULL,
  `ArticleContent` varchar(3000) NOT NULL,
  `ArticleTime` varchar(3000) NOT NULL,
  `ArticleClass` varchar(20) NOT NULL,
  `UserAccount` varchar(20) NOT NULL,
  PRIMARY KEY (`ArticleId`)
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('2', '嘻嘻嘻爱', 'https://pic3.zhimg.com/v2-58d652598269710fa67ec8d1c88d8f03_r.jpg?source=1940ef5c', '湿地公园浮点数八九点吧US从今年加热放技能色剂第八届卡卡采集卡不舒服别忘记', '2022-11-03', '2', '654321@qq.com');
INSERT INTO `article` VALUES ('3', '施工费', 'https://tse4-mm.cn.bing.net/th/id/OIP-C.IzfJK2ce21fAYrZvOuOl9QHaKy?w=182&h=265&c=7&r=0&o=5&dpr=1.3&pid=1.7', '涉及到回复is爆你菊遂事不谏不舒服比较少的基础上度假村蹦蹦床就是不出办事处金山毒霸', '2022-11-03', '3', '1234567@qq.com');
INSERT INTO `article` VALUES ('4', '改水电费', 'https://tse2-mm.cn.bing.net/th/id/OIP-C.NbL8irSF9IehtttcvrKIMQHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7', '杉杉股份四点半检测费我看你佛呢开刷大V金额是分开四川省考乐凡', '2022-11-03', '0', '12345678@qq.com');
INSERT INTO `article` VALUES ('5', '哈哈哈哈', 'https://tse2-mm.cn.bing.net/th/id/OIP-C.8ASp-BRTe2RTtFSHi3J9qAHaMW?w=182&h=304&c=7&r=0&o=5&dpr=1.3&pid=1.7', '美照', '2022-11-03', '0', '123456789@qq.com');
INSERT INTO `article` VALUES ('6', '乡村美景', 'https://tse3-mm.cn.bing.net/th/id/OIP-C.Pv_TXcKX71dO48TFR7NCjwHaHf?w=153&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse3-mm.cn.bing.net/th/id/OIP-C.lQtKT9QCq93KOSioA2e8ywHaEo?w=297&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse3-mm.cn.bing.net/th/id/OIP-C.e6nmclglljczN7YNt7_JOwHaE9?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', '你可曾见过乡村的那些绝美风景', '2022-11-05', '2', '779697406@qq.com');
INSERT INTO `article` VALUES ('7', '动漫里的画面', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.TRoy-XE5dYChDayt4oTrrwHaEK?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse3-mm.cn.bing.net/th/id/OIP-C.hcgjzUaCaX6EDNbj-G-bQQHaEN?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse2-mm.cn.bing.net/th/id/OIP-C.46DeJPKRl_N3RIMGE8H63QHaEO?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse2-mm.cn.bing.net/th/id/OIP-C.aza41loH1FA7_j7GvYyZAAHaEK', '那些动漫里的画面是不是那样的贴近我们的日常？', '2022-11-05', '1', '779697406@qq.com');
INSERT INTO `article` VALUES ('8', '一个人的生活', 'https://pic2.zhimg.com/v2-008394181f5e97c2a07f0deed2946883_1440w.jpg*https://tse3-mm.cn.bing.net/th/id/OIP-C.pxUTuVRw5b4F1VNRA8gFAAHaJR?w=160&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse2-mm.cn.bing.net/th/id/OIP-C.IQMQ6BOhR-qiJWgGDEL3aQHaHA?w=202&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse2-mm.cn.bing.net/th/id/OIP-C.SPWWnqTvvyiwqEB1OGQL-wHaHA?w=222&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7', '成年人的世界有时候就是享受着一个人待着，那种感觉是没有师门可以替代的', '2022-11-05', '1', '779697406@qq.com');
INSERT INTO `article` VALUES ('12', '今天你笑了嘛？', 'https://tse2-mm.cn.bing.net/th/id/OIP-C.n5tJssoC1c2OVs8sERq2fAHaIt?w=174&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse4-mm.cn.bing.net/th/id/OIP-C.aQbaPcY3jAaaS0j28cckuAAAAA?w=158&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse2-mm.cn.bing.net/th/id/OIP-C.FHhJK2zrYv6ysmoQxcCffQHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse1-mm.cn.bing.net/th/id/OIP-C.QvaaR5IloryMm9VM0uroLwHaGL?w=245&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7', '动物的那些搞笑瞬间', '2022-11-06', '3', '779697406@qq.com');
INSERT INTO `article` VALUES ('13', '中国的古城', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.SFasmmDq5aIp5J12Ls7OqAHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse3-mm.cn.bing.net/th/id/OIP-C.lgM-Xyk1zFo2fUE7I30neAHaE8?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse2-mm.cn.bing.net/th/id/OIP-C.d57BPG-8AyyJovgqTbkUfwHaEB?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse1-mm.cn.bing.net/th/id/OIP-C.X_d58owrezmWkZCcWEfr9QHaEN?w=315&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', '我国的古代建筑', '2022-11-06', '0', '779697406@qq.com');
INSERT INTO `article` VALUES ('16', '那些让你看起来跟特别的事', 'https://tse3-mm.cn.bing.net/th/id/OIP-C.5NJzMiv_rU8IStWSVELXPAHaLz?w=182&h=290&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse1-mm.cn.bing.net/th/id/OIP-C.TeGgs4s5kFHoG5pmrkHEaQHaQC?w=161&h=350&c=7&r=0&o=5&dpr=1.3&pid=1.7*data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAHHAN0DASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABAUCAwYBAAf/xABAEAACAgEDAwIEBAUDAwQBAwUBAgMRBAASIQUxQRNRImFxgQYUMpEjQqGx8MHR4RVS8SQzYnKCFiVDNFNzkqL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAmEQEBAAICAgICAgIDAAAAAAAAAQIRITEDEkFRBGEicRMUBdHw/9oADAMBAAIRAxEAPwAqSISK6kWo7jt9uNUNG6uDQCsosDsK0xIO1qHA+Wh5DQAAtieBRJP2GvUc', '看起来特别吗', '2022-11-06', '0', '779697406@qq.com');
INSERT INTO `article` VALUES ('18', '你晓得远古人类是咋生活的嘛', 'https://tse2-mm.cn.bing.net/th/id/OIP-C.tbsUb5o4qWWB4e8HnnbwHwHaFj?w=216&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse3-mm.cn.bing.net/th/id/OIP-C.CcoGJgvUv5Q59AkwKsoM8QHaE8?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse2-mm.cn.bing.net/th/id/OIP-C.EiIxR8YYmm8hfbuUwzFjUwHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse1-mm.cn.bing.net/th/id/OIP-C.Jbo86vNhWASCrliIrxnjOwHaFz?w=237&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse1-mm.cn.bing.net/th/id/OIP-C.Jbo86vNhWASCrliIrxnjOwHaFz?w=237&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7https://tse3-mm.cn.bing.net/th/id/OIP-C.Lx5OkaHFTWnoUcDc7nv_PAHaE8?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', '现代社会的繁华都是人类在日常生活中一步一步发觉来的', '2022-11-07', '1', '1214699748@qq.com');
INSERT INTO `article` VALUES ('19', '走进小朋友的世界', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.iwcZoY8sU94PekiWYpuv_gHaE8?w=298&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse2-mm.cn.bing.net/th/id/OIP-C.oz-C4lddFYT1nAxHkbZ1xAHaLI?w=132&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse3-mm.cn.bing.net/th/id/OIP-C.eDrA-6zs8iaa0uwo3Lh-xwHaE7?w=298&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse2-mm.cn.bing.net/th/id/OIP-C.Sw-nnAIqlbr4WNslR4PZwQHaE7?w=299&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse1-mm.cn.bing.net/th/id/OIP-C.fGBCdQ456VHiYpxluccRsQDYEg?w=150&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7', '你有经历过嘛', '2022-11-07', '1', '1214699748@qq.com');
INSERT INTO `article` VALUES ('24', '我的家乡', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.NZK2pZimHyctslcaCgF7awHaE7?w=303&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse3-mm.cn.bing.net/th/id/OIP-C.bU9Vy_ko-0lC2XOVB3rdRwHaFj?w=270&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse4-mm.cn.bing.net/th/id/OIP-C.oWQ_QOYr-m2sKfjfKTXwfwHaE9?w=303&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse1-mm.cn.bing.net/th/id/OIP-C.xniyl9NmGomlBZluFyuSHgHaE8?w=304&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse4-mm.cn.bing.net/th/id/OIP-C.3nyxEu-eFpQojbW-s8v4jQHaGg?w=201&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse2-mm.cn.bing.net/th/id/OIP-C.T6a0oQmN87Gre6TMwsGVPAHaE7?w=278&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse3-mm.cn.bing.net/th/id/OIP-C.2Hw9ap1qmm0fT-MQzoylFwHaEo?w=306&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7', '家乡的美', '2011-11-08', '2', '779697406@qq.com');
INSERT INTO `article` VALUES ('31', '南方美景', 'https://tse2-mm.cn.bing.net/th/id/OIP-C.Xo7qkqLwrNmz3u34kSvTlAHaEB?w=324&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse3-mm.cn.bing.net/th/id/OIP-C.cK64avOrEokhULYJ58QOkAHaFw?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', '南方美景', '20222-11-06', '2', '15121623727@qq.com');
INSERT INTO `article` VALUES ('32', '北方美景', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.aunUYOCoMpgcyHcB2h17XgHaE5?w=292&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse4-mm.cn.bing.net/th/id/OIP-C.-Mn2keLXFoOCEuHDT92OngHaEo?w=304&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7', '北方美景', '2022-11-05', '2', '15121623727@qq.com');
INSERT INTO `article` VALUES ('35', '笑死个人', 'https://tse4-mm.cn.bing.net/th/id/OIP-C.XhIlg3Tov4bBjg3kU2mYlwAAAA?w=138&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse1-mm.cn.bing.net/th/id/OIP-C.EghMbx_tL_5C9RW-_kYvPwAAAA?w=291&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse1-mm.cn.bing.net/th/id/OIP-C.eNI11h_hdjsl0oSif1e0vAHaFi?w=247&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse4-mm.cn.bing.net/th/id/OIP-C.Re_rJoDvjlAlgMezTXKK2QHaJb?w=141&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', '我的搞笑瞬间', '2022-11-07', '3', '1214699748@qq.com');
INSERT INTO `article` VALUES ('38', '知名建筑', 'https://tse2-mm.cn.bing.net/th/id/OIP-C.3dqjxqREITN08HP0dE89_wHaE8?w=272&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse1-mm.cn.bing.net/th/id/OIP-C.6LbM40U4v8oXuUnw-DpqjgHaE7?w=272&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse4-mm.cn.bing.net/th/id/OIP-C.0I-vuHImJmFr82pdGWkIoAHaJ4?w=133&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse2-mm.cn.bing.net/th/id/OIP-C.ZBTSHEMuMLq2LRoAcqnuBAHaEo?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', '世界著名建筑', '2019-11-08', '0', '1214699748@qq.com');
INSERT INTO `article` VALUES ('40', '你见过这样的房子嘛？', 'https://tse3-mm.cn.bing.net/th/id/OIP-C.-gkUDtenHkJXoffrQ4xyhQHaFu?w=224&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse3-mm.cn.bing.net/th/id/OIP-C.-gkUDtenHkJXoffrQ4xyhQHaFu?w=224&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse4-mm.cn.bing.net/th/id/OIP-C.D7LBG_raiouFvN82RPV1kQHaFX?w=272&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse4-mm.cn.bing.net/th/id/OIP-C.eUf3lTWQQXiGoqKFu9YyUwHaE8?w=289&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7', '树房', '2018-11-30', '0', '15121623727@qq.com');
INSERT INTO `article` VALUES ('41', '国内的顶尖建筑', 'https://tse3-mm.cn.bing.net/th/id/OIP-C.oFAlcWgrbvYW3skqHE6rOQHaEn?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse1-mm.cn.bing.net/th/id/OIP-C.KrDfMq01hXpK20QJyA1VegHaFB?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse1-mm.cn.bing.net/th/id/OIP-C._msA4O7EX11j7jw-UmzcgwHaE7?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', '震撼吧', '2019-06-30', '0', '15121623727@qq.com');
INSERT INTO `article` VALUES ('43', '职业', 'https://tse4-mm.cn.bing.net/th/id/OIP-C.k-1Tj4Chh14DkGcbDukVFwHaE8?w=291&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse3-mm.cn.bing.net/th/id/OIP-C.C5zK3-XLtHrEsyc2pd46WQHaEg?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse4-mm.cn.bing.net/th/id/OIP-C.qaBcALROGLyqXQVu8b82kwHaE5?w=282&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7*https://tse3-mm.cn.bing.net/th/id/OIP-C.Z7jRRmzLjsqqZhXpQ_6ZggHaFj?w=232&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', '不同的职业，相同的目的。', '2022-11-17', '0', '779697406@qq.com');
INSERT INTO `article` VALUES ('112', '打招呼', 'http://localhost:8080/public/upload/1667659806202HeadImage.jpg', '新人加入，请多关注，爆个照', '2022-11-5 ', '1', '779697406@qq.com');
INSERT INTO `article` VALUES ('113', '那些美如画的风景', 'https://img0.baidu.com/it/u=1066132246,798468805&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500*https://img1.baidu.com/it/u=2034630356,2566432224&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=664*https://img2.baidu.com/it/u=1656650596,1224657165&fm=253&fmt=auto&app=138&f=JPEG?w=567&h=472*https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew5.photophoto.cn%2F20101227%2Fgaoshanliushui-pubu-xiaoxi-heliutupian-12401771_1.jpg&refer=http%3A%2F%2Fpicnew5.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670305392&t=ad608fd17c61ae77efc1243a98dc9a10', '峥嵘秋气动千崖。川平晚照回。小桥流水送吟鞋。无人觉往来。', '2022-11-1', '2', '396566403@qq.com');
INSERT INTO `article` VALUES ('114', '向往银河的美，无人探寻', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ufo-1.cn%2Fuploads%2Fallimg%2F201505%2F1-150505102SY48.jpg&refer=http%3A%2F%2Fwww.ufo-1.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670305767&t=8775fd83e3a9a6661a13640553698367*https://img2.baidu.com/it/u=2170097717,4079088732&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500*https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg95.699pic.com%2Fxsj%2F0k%2Fvw%2Fdc.jpg%21%2Ffw%2F700%2Fwatermark%2Furl%2FL3hzai93YXRlcl9kZXRhaWwyLnBuZw%2Falign%2Fsoutheast&refer=http%3A%2F%2Fimg95.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670305806&t=6d070dacc33b04bf808184fbde25ab42*https://img0.baidu.com/it/u=2631782248,3290107157&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=467', '想驾着小小飞船，捡拾宇宙中细碎的星光，在每一个温柔的夜晚，拼凑成月亮的渔网，挂到你的床头。\n', '2022-11-2', '2', '1428390162@qq.com');
INSERT INTO `article` VALUES ('116', '猫咪高萌瞬间', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F833cdda0aaf554f0bc332a4572b11d79bcef975d.jpg&refer=http%3A%2F%2Fi2.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670306236&t=d255f76b158f5a79ff17e359f7857cc9*https://img0.baidu.com/it/u=2572713471,548144665&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=450*https://img1.baidu.com/it/u=2486051946,2051421371&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500*https://img2.baidu.com/it/u=1415246954,3984960314&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=669', '这么可爱的小猫咪谁不想要呀！', '2022-11-4', '1', '396566403@qq.com');
INSERT INTO `article` VALUES ('117', '帅气汪星人', 'https://img0.baidu.com/it/u=3274646873,1694740353&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889*https://img1.baidu.com/it/u=3602510008,1089443037&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750*https://img0.baidu.com/it/u=689187015,1567290969&fm=253&fmt=auto&app=138&f=JPEG?w=375&h=500*https://img0.baidu.com/it/u=1581083239,1500000654&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500*https://img2.baidu.com/it/u=4202749087,2939171137&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800', '帅气狗狗请求出战', '2022-11-5', '1', '396566403@qq.com');
INSERT INTO `article` VALUES ('118', '猫有了，狗也有了，更不能少了我们！', 'https://img0.baidu.com/it/u=474489743,1580874970&fm=253&fmt=auto&app=138&f=JPEG?w=634&h=423*https://img1.baidu.com/it/u=382244798,3525269416&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=292*https://img1.baidu.com/it/u=541343601,2867604700&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=345*https://img2.baidu.com/it/u=3460188534,820690710&fm=253&fmt=auto&app=138&f=JPEG?w=468&h=296*https://img2.baidu.com/it/u=193129432,4073825098&fm=253&fmt=auto&app=138&f=JPEG?w=641&h=428', '猫和狗算什么，来看看我们，我们更“可爱”，更“帅气”', '2022-11-6', '0', '396566403@qq.com');
INSERT INTO `article` VALUES ('125', '一家两代', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6E2hhQ5FYmyIKCsnOc2unki3s81hv-1f0Rg&usqp=CAU*https://p3-bk.byteimg.com/tos-cn-i-mlhdmxsy5m/9942bb304f374b5d9cb6158c00578074~tplv-mlhdmxsy5m-q75:0:0.image', '真的是有其父必有其子，星二代啊 ！', '2022-11-1', '1', '1428390162@qq.com');
INSERT INTO `article` VALUES ('126', '孙俪的新饼', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI8ktuThIBdXaGYp4sPfwUJqSooqeNuYAvlQ&usqp=CAU', '适配度看看~', '2022-11-2', '1', '1471695481@qq.com');
INSERT INTO `article` VALUES ('137', '打招呼', 'http://localhost:7001/public/upload/1668873128567headimg.jpg', '大家好，我是网站的建设人员，很高兴跟大家见面。网站初次搭建一定有很多bug和不足，请大家多多评论，多提宝贵意见！最后爆一张本人的照片吧！', '2022-11-19 23:52:29', '生活', '1428390162@qq.com');

-- ----------------------------
-- Table structure for collect
-- ----------------------------
DROP TABLE IF EXISTS `collect`;
CREATE TABLE `collect` (
  `CollectId` int(10) NOT NULL AUTO_INCREMENT,
  `ArticleId` int(10) NOT NULL,
  `UserAccount` varchar(20) NOT NULL,
  PRIMARY KEY (`CollectId`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collect
-- ----------------------------
INSERT INTO `collect` VALUES ('27', '35', '1428390162@qq.com');
INSERT INTO `collect` VALUES ('56', '13', '1428390162@qq.com');
INSERT INTO `collect` VALUES ('57', '117', '1428390162@qq.com');

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `CommentsId` int(11) NOT NULL AUTO_INCREMENT,
  `ArticleId` int(11) NOT NULL,
  `UserAccount` varchar(255) NOT NULL,
  `CommentsContent` varchar(255) NOT NULL,
  PRIMARY KEY (`CommentsId`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comments
-- ----------------------------
INSERT INTO `comments` VALUES ('1', '2', '123456@qq.com', '123456评论了654321的发布');
INSERT INTO `comments` VALUES ('2', '6', '654321@qq.com', '654321评论了779697406@qq.com');
INSERT INTO `comments` VALUES ('3', '3', '123456@qq.com', '123456评论了1234567的发布');
INSERT INTO `comments` VALUES ('4', '4', '1234567@qq.com', '1234567评论了12345678的发布');
INSERT INTO `comments` VALUES ('5', '4', '779697406@qq.com', '779697406评论了12345678');
INSERT INTO `comments` VALUES ('6', '1', '779697406@qq.com', '779697406@qq.com评论了123456');
INSERT INTO `comments` VALUES ('7', '13', '1214699748@qq.com', '779697406@qq.com评论了1214699748@qq.com');
INSERT INTO `comments` VALUES ('8', '42', '15121623727@qq.com', '哈哈哈');
INSERT INTO `comments` VALUES ('9', '40', '15121623727@qq.com', '沙等会儿防护而恢复');
INSERT INTO `comments` VALUES ('10', '34', '15121623727@qq.com', '水电费扔个通过额');
INSERT INTO `comments` VALUES ('11', '37', '15121623727@qq.com', '是大佛黑色if别发布idskfnj');
INSERT INTO `comments` VALUES ('12', '29', '15121623727@qq.com', '是大佛合宿风格婚后爱而恢复');
INSERT INTO `comments` VALUES ('13', '24', '15121623727@qq.com', '沙嗲购物ID噶科技部擦可好玩公敌');
INSERT INTO `comments` VALUES ('14', '19', '15121623727@qq.com', '按时丢爱国五斗柜');
INSERT INTO `comments` VALUES ('15', '13', '15121623727@qq.com', '打我大概怪无偶发发过的燕无归 ');
INSERT INTO `comments` VALUES ('16', '4', '15121623727@qq.com', '安徽地府我阿尔好哒哈挨打哈 前雾灯哈哈我的of ');
INSERT INTO `comments` VALUES ('17', '9', '779697406@qq.com', '按时对外给发个覅武汉法和符 ');
INSERT INTO `comments` VALUES ('18', '15', '779697406@qq.com', '阿萨德和高雅文高度为个');
INSERT INTO `comments` VALUES ('19', '17', '779697406@qq.com', '返回安徽克拉松动你喊我我阿飞回复 ');
INSERT INTO `comments` VALUES ('20', '26', '779697406@qq.com', 'duyafw8ga敬爱个isU盾好玩得很暴富恶化哦 ');
INSERT INTO `comments` VALUES ('21', '27', '779697406@qq.com', '阿斯达世界杯开发克里斯蒂娜为杜宏伟你');
INSERT INTO `comments` VALUES ('22', '35', '779697406@qq.com', '是大于各区域为打蜂窝肺威风分');
INSERT INTO `comments` VALUES ('23', '1', '1428390162@qq.com', '666');
INSERT INTO `comments` VALUES ('24', '18', '1428390162@qq.com', '真棒');
INSERT INTO `comments` VALUES ('25', '1', '1428390162@qq.com', '666');
INSERT INTO `comments` VALUES ('26', '1', '1428390162@qq.com', '不错哦');
INSERT INTO `comments` VALUES ('27', '7', '1428390162@qq.com', '这。。。');
INSERT INTO `comments` VALUES ('28', '8', '1428390162@qq.com', '牛啊');
INSERT INTO `comments` VALUES ('29', '14', '1428390162@qq.com', '对啊');
INSERT INTO `comments` VALUES ('30', '1', '1428390162@qq.com', '111');
INSERT INTO `comments` VALUES ('33', '1', '123456@qq.com', 'jsbkvjks');
INSERT INTO `comments` VALUES ('34', '121', '1428390162@qq.com', '厉害啊');
INSERT INTO `comments` VALUES ('35', '24', '1428390162@qq.com', '1111');
INSERT INTO `comments` VALUES ('36', '35', '1428390162@qq.com', '666');
INSERT INTO `comments` VALUES ('37', '2', '1428390162@qq.com', '风景不错哦，在哪里拍的？');
INSERT INTO `comments` VALUES ('38', '43', '1428390162@qq.com', '6');

-- ----------------------------
-- Table structure for focus
-- ----------------------------
DROP TABLE IF EXISTS `focus`;
CREATE TABLE `focus` (
  `FocusId` int(11) NOT NULL AUTO_INCREMENT,
  `UserAccount` varchar(255) NOT NULL,
  `UserAccounted` varchar(255) NOT NULL,
  PRIMARY KEY (`FocusId`)
) ENGINE=InnoDB AUTO_INCREMENT=168 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of focus
-- ----------------------------
INSERT INTO `focus` VALUES ('45', '654321@qq.com', '123456@qq.com');
INSERT INTO `focus` VALUES ('47', '1234567@qq.com', '123456@qq.com');
INSERT INTO `focus` VALUES ('48', '12345678@qq.com', '123456@qq.com');
INSERT INTO `focus` VALUES ('49', '123456789@qq.com', '123456@qq.com');
INSERT INTO `focus` VALUES ('51', '1234567@qq.com', '1234567@qq.com');
INSERT INTO `focus` VALUES ('52', '1234567@qq.com', '12345678@qq.com');
INSERT INTO `focus` VALUES ('59', '1234567@qq.com', '779697406@qq.com');
INSERT INTO `focus` VALUES ('60', '654321@qq.com', '779697406@qq.com');
INSERT INTO `focus` VALUES ('61', '12345678@qq.com', '779697406@qq.com');
INSERT INTO `focus` VALUES ('62', '123456789@qq.com', '779697406@qq.com');
INSERT INTO `focus` VALUES ('63', '15121623727@qq.com', '779697406@qq.com');
INSERT INTO `focus` VALUES ('65', '1214699748@qq.com', '779697406@qq.com');
INSERT INTO `focus` VALUES ('66', '1214699748@qq.com', '15121623727@qq.com');
INSERT INTO `focus` VALUES ('67', '15121623727@qq.com', '1214699748@qq.com');
INSERT INTO `focus` VALUES ('68', '779697406@qq.com', '123456@qq.com');
INSERT INTO `focus` VALUES ('69', '779697406@qq.com', '654321@qq.com');
INSERT INTO `focus` VALUES ('91', '123456@qq.com', '1428390162@qq.com');
INSERT INTO `focus` VALUES ('92', '123456789@qq.com', '1428390162@qq.com');
INSERT INTO `focus` VALUES ('93', '779697406@qq.com', '1428390162@qq.com');
INSERT INTO `focus` VALUES ('165', '1428390162@qq.com', '123456789@qq.com');
INSERT INTO `focus` VALUES ('167', '1428390162@qq.com', '396566403@qq.com');

-- ----------------------------
-- Table structure for love
-- ----------------------------
DROP TABLE IF EXISTS `love`;
CREATE TABLE `love` (
  `LoveId` int(11) NOT NULL AUTO_INCREMENT,
  `ArticleId` int(11) NOT NULL,
  `UserAccount` varchar(255) NOT NULL,
  PRIMARY KEY (`LoveId`)
) ENGINE=InnoDB AUTO_INCREMENT=225 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of love
-- ----------------------------
INSERT INTO `love` VALUES ('2', '3', '654321@qq.com');
INSERT INTO `love` VALUES ('3', '4', '1234567@qq.com');
INSERT INTO `love` VALUES ('4', '6', '12345678@qq.com');
INSERT INTO `love` VALUES ('5', '4', '123456789@qq.com');
INSERT INTO `love` VALUES ('6', '4', '779697406@qq.com');
INSERT INTO `love` VALUES ('7', '1', '123456@qq.com');
INSERT INTO `love` VALUES ('8', '3', '1234567@qq.com');
INSERT INTO `love` VALUES ('9', '5', '123456789@qq.com');
INSERT INTO `love` VALUES ('10', '6', '12345678@qq.com');
INSERT INTO `love` VALUES ('11', '5', '779697406@qq.com');
INSERT INTO `love` VALUES ('12', '23', '654321@qq.com');
INSERT INTO `love` VALUES ('13', '9', '1234567@qq.com');
INSERT INTO `love` VALUES ('14', '40', '12345678@qq.com');
INSERT INTO `love` VALUES ('15', '36', '123456789@qq.com');
INSERT INTO `love` VALUES ('16', '24', '779697406@qq.com');
INSERT INTO `love` VALUES ('17', '14', '123456@qq.com');
INSERT INTO `love` VALUES ('18', '10', '779697406@qq.com');
INSERT INTO `love` VALUES ('19', '12', '779697406@qq.com');
INSERT INTO `love` VALUES ('20', '16', '779697406@qq.com');
INSERT INTO `love` VALUES ('21', '18', '779697406@qq.com');
INSERT INTO `love` VALUES ('22', '20', '779697406@qq.com');
INSERT INTO `love` VALUES ('23', '26', '779697406@qq.com');
INSERT INTO `love` VALUES ('24', '27', '779697406@qq.com');
INSERT INTO `love` VALUES ('25', '34', '779697406@qq.com');
INSERT INTO `love` VALUES ('26', '37', '779697406@qq.com');
INSERT INTO `love` VALUES ('27', '43', '779697406@qq.com');
INSERT INTO `love` VALUES ('28', '15', '1214699748@qq.com');
INSERT INTO `love` VALUES ('29', '18', '1214699748@qq.com');
INSERT INTO `love` VALUES ('30', '9', '1214699748@qq.com');
INSERT INTO `love` VALUES ('31', '6', '1214699748@qq.com');
INSERT INTO `love` VALUES ('32', '8', '1214699748@qq.com');
INSERT INTO `love` VALUES ('33', '12', '1214699748@qq.com');
INSERT INTO `love` VALUES ('34', '19', '1214699748@qq.com');
INSERT INTO `love` VALUES ('35', '21', '1214699748@qq.com');
INSERT INTO `love` VALUES ('36', '41', '1214699748@qq.com');
INSERT INTO `love` VALUES ('37', '42', '1214699748@qq.com');
INSERT INTO `love` VALUES ('38', '32', '1214699748@qq.com');
INSERT INTO `love` VALUES ('39', '3', '15121623727@qq.com');
INSERT INTO `love` VALUES ('40', '35', '1214699748@qq.com');
INSERT INTO `love` VALUES ('41', '7', '15121623727@qq.com');
INSERT INTO `love` VALUES ('42', '14', '15121623727@qq.com');
INSERT INTO `love` VALUES ('43', '16', '15121623727@qq.com');
INSERT INTO `love` VALUES ('44', '27', '15121623727@qq.com');
INSERT INTO `love` VALUES ('45', '33', '15121623727@qq.com');
INSERT INTO `love` VALUES ('46', '36', '15121623727@qq.com');
INSERT INTO `love` VALUES ('47', '39', '15121623727@qq.com');
INSERT INTO `love` VALUES ('48', '42', '15121623727@qq.com');
INSERT INTO `love` VALUES ('106', '17', '779697406@qq.com');
INSERT INTO `love` VALUES ('107', '7', '779697406@qq.com');
INSERT INTO `love` VALUES ('108', '8', '779697406@qq.com');
INSERT INTO `love` VALUES ('151', '111', '111@qq.com');
INSERT INTO `love` VALUES ('194', '35', '1428390162@qq.com');
INSERT INTO `love` VALUES ('195', '24', '1428390162@qq.com');
INSERT INTO `love` VALUES ('224', '117', '1428390162@qq.com');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `UserId` int(11) NOT NULL AUTO_INCREMENT,
  `UserAccount` varchar(255) NOT NULL,
  `UserPassword` varchar(255) NOT NULL,
  `UserName` varchar(255) NOT NULL,
  `UserGender` varchar(5) NOT NULL,
  `UserHeadImg` varchar(3000) NOT NULL,
  `UserMotto` varchar(255) NOT NULL,
  `UserBirthday` varchar(100) NOT NULL,
  `UserHometown` varchar(255) NOT NULL,
  PRIMARY KEY (`UserId`),
  UNIQUE KEY `UserAccount` (`UserAccount`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '123456@qq.com', '123456', '666', '小哥哥', 'http://localhost:7001/upload/1668774656770headimg.jpg', '我很好', 'Wed Nov 09 2022 00:00:00 GMT+0800 (中国标准时间)', '中国');
INSERT INTO `user` VALUES ('2', '654321@qq.com', '654321', '小冉', '男', 'https://img1.baidu.com/it/u=3206351602,2714439067&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500', '哈哈哈', '', '中国');
INSERT INTO `user` VALUES ('3', '1234567@qq.com', '1234567', '老孔', '男', 'https://tse3-mm.cn.bing.net/th/id/OIP-C.AaD0qlYDX-RTF_frh-ZhIQHaEo?pid=ImgDet&rs=1', '地方那数据后佛女哦is活人覅', '', '中国');
INSERT INTO `user` VALUES ('4', '12345678@qq.com', '12345678', '小孔', '男', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.ZFeZmWytRtwrRsuEXhSTUAHaEo?pid=ImgDet&rs=1', '士大夫莺歌燕舞不参加和尚不打预覆盖', '', '中国');
INSERT INTO `user` VALUES ('5', '123456789@qq.com', '123456789', 'Lisa', '女', 'https://tse1-mm.cn.bing.net/th/id/OIP-C.3iIsLampL3KJoudG7ZEq0wHaKw?w=182&h=265&c=7&r=0&o=5&dpr=1.3&pid=1.7', '忽有故人心上过，回收山河已是秋', '', '中国');
INSERT INTO `user` VALUES ('6', '779697406@qq.com', '123456', '小苒', '男', 'https://img1.baidu.com/it/u=3206351602,2714439067&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500', '大丈夫之志，应如长江东奔大海，何苦怀恋于温柔乡。', '', '中国');
INSERT INTO `user` VALUES ('7', '1214699748@qq.com', '123456', '小哥', '男', 'https://tse1-mm.cn.bing.net/th/id/OIP-C._vG34XIoLjvANZUEUORPkwHaJQ?w=207&h=259&c=7&r=0&o=5&dpr=1.3&pid=1.7', '我指挥永远的站在你身后，只要你回头我就在。', '', '中国');
INSERT INTO `user` VALUES ('8', '15121623727@qq.com', '123456', '落日余晖', '男', 'https://tse2-mm.cn.bing.net/th/id/OIP-C.1JUmzjV7MozCYghwBEl41AHaLG?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7', '其实你一直都是举世无双，只是你没发现。', '', '中国');
INSERT INTO `user` VALUES ('12', '1471695481@qq.com', '123456', '杜林岚', '男', 'https://img0.baidu.com/it/u=3399922216,1699265349&fm=253&fmt=auto?w=800&h=800', 'YOU ARE MY ONLY SU', '', '中国');
INSERT INTO `user` VALUES ('13', '2942167579@qq.com', '123456', '苏娟', '女', 'https://img1.baidu.com/it/u=1083175044,2171704463&fm=253&fmt=auto?w=800&h=800', 'YOU ARE MY ONLY LAN', '', '中国');
INSERT INTO `user` VALUES ('14', '396566403@qq.com', '123456', '穆明凯', '男', 'https://img0.baidu.com/it/u=1167191844,1615020385&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', '本人已死，有事烧纸', '', '中国');
INSERT INTO `user` VALUES ('15', '1561980540@qq.com', '000', '用户', '男', 'https://img1.baidu.com/it/u=3206351602,2714439067&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500', '座右铭', '', '中国');
INSERT INTO `user` VALUES ('16', '2222222222@qq.com', '111', '用户', '男', 'https://img1.baidu.com/it/u=3206351602,2714439067&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500', '座右铭', '', '中国');
INSERT INTO `user` VALUES ('17', '11111111@qq.com', '111', '用户', '男', 'https://img1.baidu.com/it/u=3206351602,2714439067&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500', '座右铭', '', '中国');
INSERT INTO `user` VALUES ('18', '11112222@qq.com', '123', '用户', '男', 'http://localhost:8080/public/upload/1667916219544headimg.jpg', '座右铭', '', '中国');
INSERT INTO `user` VALUES ('43', '1428390162@qq.com', '123', '孔庆志', '小哥哥', 'http://127.0.0.1:7001/upload/1669100913286headimg.jpg', '我很有个性，这是我的签名', 'Thu Nov 24 2022 00:00:00 GMT+0800 (中国标准时间)', '济宁');
