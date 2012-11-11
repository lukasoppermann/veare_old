-- MySQL dump 10.13  Distrib 5.5.25, for osx10.6 (i386)
--
-- Host: localhost    Database: veare
-- ------------------------------------------------------
-- Server version	5.5.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ci_sessions`
--

DROP TABLE IF EXISTS `ci_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ci_sessions` (
  `session_id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(45) NOT NULL DEFAULT '0',
  `user_agent` varchar(120) DEFAULT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text NOT NULL,
  PRIMARY KEY (`session_id`),
  KEY `last_activity_idx` (`last_activity`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ci_sessions`
--

LOCK TABLES `ci_sessions` WRITE;
/*!40000 ALTER TABLE `ci_sessions` DISABLE KEYS */;
INSERT INTO `ci_sessions` VALUES ('6ac2b3c7539b9bb72c16b33a5d360270','127.0.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0',1350696288,'');
/*!40000 ALTER TABLE `ci_sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_data`
--

DROP TABLE IF EXISTS `client_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client_data` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `key` varchar(10) NOT NULL,
  `type` varchar(30) DEFAULT NULL,
  `data` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `key` (`key`,`type`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_data`
--

LOCK TABLES `client_data` WRITE;
/*!40000 ALTER TABLE `client_data` DISABLE KEYS */;
INSERT INTO `client_data` VALUES (1,'css','lined-paper','.note{\n   color: rgb(100,100,70);\n   width: 300px;\n   text-align: left;\n   display: inline-block;\n   padding: 5px 10px;\n   font-size: 15px;\n   line-height: 24px;\n   box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.25);\n   -webkit-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.25);\n   -moz-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.25);\n   border-radius: 3px;\n   background-color: rgb(250,245,200);\n   background-image: url([images]/1px_note_line.png);\n   background-position: left 0;\n   background-repeat: repeat;\n   margin-bottom: 20px;\n}\n.lined-paper{\n   color: rgb(100,100,70);\n   width: 300px;\n   text-align: left;\n   display: inline-block;\n   padding: 5px 10px;\n   font-size: 15px;\n   line-height: 24px;\n   box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.25);\n   -webkit-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.25);\n   -moz-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.25);\n   border-radius: 3px;\n   margin-bottom: 20px;\n   background-color: rgb(250,245,200);\n   background-image: -webkit-linear-gradient(bottom, rgba(230,230,200,0.4) 0, transparent 1px) 0 0px;\n    background-image: -moz-linear-gradient(bottom, rgba(230,230,200,0.4) 0, transparent 1px);\n    background-image: linear-gradient(bottom, rgba(230,230,200,0.4) 0, transparent 1px) 0 0px;\n    -webkit-background-size: 100% 24px;\n    -moz-background-size: 100% 24px;\n    background-size: 100% 24px;\n}');
INSERT INTO `client_data` VALUES (3,'settings','page_name','{\"1\":\"veare.net\"}');
INSERT INTO `client_data` VALUES (2,'languages','language','{\"_id\":1,\"abbr\":\"en\",\"status\":1,\"name\":\"english\",\"self_name\":\"english\",\"position\":1,\"flag\":\"en\"}');
INSERT INTO `client_data` VALUES (4,'settings','menu','{\"_id\":\"1\",\"menu_id\":1,\"name\":\"main\",\"label\":\"Mainmenu\",\"class\":\"main-menu\"}');
INSERT INTO `client_data` VALUES (5,'settings','compression','{\"_id\":\"html\",\"compression\":\"TRUE\",\"gzip\":\"TRUE\",\"expire\":\"3600\"}');
INSERT INTO `client_data` VALUES (6,'settings','compression','{\"_id\":\"js\",\"compression\":\"TRUE\",\"gzip\":\"TRUE\",\"minify\":\"TRUE\",\"expire\":\"3600\"}');
INSERT INTO `client_data` VALUES (7,'settings','compression','{\"_id\":\"css\",\"compression\":\"TRUE\",\"gzip\":\"TRUE\",\"expire\":\"3600\"}');
/*!40000 ALTER TABLE `client_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_entries`
--

DROP TABLE IF EXISTS `client_entries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client_entries` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `menu_id` int(5) DEFAULT NULL,
  `permalink` varchar(255) DEFAULT NULL,
  `type` tinyint(1) NOT NULL DEFAULT '1',
  `language` int(2) DEFAULT NULL,
  `status` int(2) DEFAULT NULL,
  `title` varchar(250) NOT NULL,
  `text` text,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tags` text,
  `data` text,
  PRIMARY KEY (`id`),
  KEY `menu_id` (`menu_id`,`type`,`status`),
  KEY `language` (`language`),
  KEY `permalink` (`permalink`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_entries`
--

LOCK TABLES `client_entries` WRITE;
/*!40000 ALTER TABLE `client_entries` DISABLE KEYS */;
INSERT INTO `client_entries` VALUES (2,0,NULL,2,1,1,'The essence of a blog.','Text','2012-05-03 11:16:31','concept, thoughts','{\"css\":1}');
INSERT INTO `client_entries` VALUES (3,0,NULL,2,1,2,'Speed – a usability issue?',NULL,'2012-05-09 23:41:00','concept, thoughts, usability','{\"excerpt\":\"Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...\"}');
INSERT INTO `client_entries` VALUES (1,0,'utilizing-cron-jobs',2,1,1,'Utilizing Cron Jobs','<p>If you don\'t work on web applications you might not see the benefit of cron jobs, so let me try to convince you. Image you have a cms and write a post, but this post is supposed to be published on next monday. So what you do is assign a date to the post and once a user comes to the page you check if the date is still in the future or already on the past. Everything fine. The problem starts when you want to promote your posts on Twitter.</p>\n\n<p>Obviously you do not want your page to announce your post on Twitter once the first person visits your site after the post was published. You want the tweet to go out the moment your post is live to actually drive people to your page. This is were cron jobs come in very handy.</p>\n\n<h2>Setting up the cron job</h2>\n<p>Setting up a cron job might vary depending on the system you use to manage your server / webspace but the important parts should be the same.</p>\n\n<h3>Understanding the time settings</h3>\n\n<img class=\"image right\" src=\"[images]/cron-time.png\" alt=\"veare - cron job time\" />\n\n<p>Although confusing at first, time settings for cron jobs are very simple once you got the idea. In essence the time is defined by 5 parameters. In the traditional notation the parameters are a space-seperated string (* * * * *). Those are from the first to the last, minute (0-59), hour (0-23), day of month (1-31), month (1-12) and day of the week (0-6, beginning at 0 = sunday).</p>\n\n<p>Additionally there are some special characters.</p>\n<dl class=\"short percent-10\">\n<li><dt class=\"topic\">*</dt><dd class=\"definition\">for any parameter means every (minute or day, etc.)</dd></li>\n<li><dt class=\"topic\">/</dt><dd class=\"definition\">indicates a specific repitition (e.g. in the minute parameter */5 means every 5 minutes)</dd></li>\n<li><dt class=\"topic\">,</dt><dd class=\"definition\">defines specific values (e.g. in the day of month 7,14 means on every 7th and 14th of every month)</dd></li>\n<li><dt class=\"topic\">-</dt><dd class=\"definition\">defines a range (e.g. in the day of week parameter 1-5 means monday to friday)</dd></li>\n</dl>\n\n<p>By combining the 5 parameters you can create nearly every inteval you can think of.</p>\n<dl class=\"short percent-20\">\n<li><dt class=\"topic\">*/15 * * * *</dt><dd class=\"definition\">every 15 minutes</dd></li>\n<li><dt class=\"topic\">0 * * * *</dt><dd class=\"definition\">hourly (every 0 minute of every hour)</dd></li>\n<li><dt class=\"topic\">0 * * * *</dt><dd class=\"definition\">hourly (every 0 minute of every hour)</dd></li>\n</dl>','2012-05-03 11:15:17','programming, php','{\"meta_title\":\"Utilizing Cron Jobs with PHP\",\"excerpt\":\"Cron jobs are basically automatically activated scripts run on your server. As you probably can image, this can be quite helpful, since no user needs to go to your page to activate the script. So lets see how it works.\"}');
INSERT INTO `client_entries` VALUES (4,0,NULL,2,1,1,'Workspaces - a workflow concept',NULL,'2012-05-10 05:39:32','usability, concept, interface, interaction','{\"excerpt\":\"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore euccaecat cupidatat non proident, sunt in culpa aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu qui officia deserunt mollit anim id est laborum...\"}');
INSERT INTO `client_entries` VALUES (5,0,'task-driven-interface-archtitecture',2,1,1,'Task driven interface archtitecture',NULL,'2012-05-11 04:49:06','concepts','{\"excerpt\":\"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu qui officia deserunt mollit anim id est laborum...\"}');
INSERT INTO `client_entries` VALUES (6,0,'css3-lined-paper',2,1,1,'Lined paper with css','<p>First lets take a look at the traditional way of creating a lined paper background. Our html markup is a very simple list.<p>\n\n<pre>\n<ul class=\"lined-paper\">\n   <li>List item 1</li>\n   <li>List item 2</li>\n   <li>List item 3</li>\n</ul>\n</pre>\n\n<p>We now need to create an image to for the lines, it has to be 1px wide and as high as our line-height is.</p>\n<img class=\"right image\" src=\"[images]/lined-paper-line.png\" alt=\"line image\" />\n<p>This image does not contain much information. You can keep the background transparent or even assign a color to reduce the file size (mine is 120 bytes). Once cached the image is not a huge payload and will be loaded instantly.</p>\n\n<p>At last we can apply the css to create the final product. We need to assign the image as a background image to the unordered-list element. The image will be repeated both horizontally and vertically thus creating the illusion of lines on a paper.</p>\n<pre>\n.lined-paper{\n   background-image: url(../images/lined-paper.png);\n   background-position: left 0;\n   background-repeat: repeat;\n}\n</pre>\n<p>The result should look something like this note.</p>\n<div class=\"center\">\n<div class=\"note\">This note is build using one image<br /> to create the lined background.<br />But we can do better.</div>\n</div>\n\n<h2>The CSS 3 method</h2>\n<p>It is pretty easy, right? So why to we bother with a different method? The problem of course is the image. While very small, due to the need to be repeated horizontally as well as vertically we can not add this image to our sprite (assuming you are using a sprite). This means, the small image adds an extra http-request to our page, which is quite a big tradeoff for this nicety which is effectively only styling and adds no functionality.</p>\n<p>So if we could just remove the image from our method everything would be fine, right? This is in fact, easy as pie and allows for even more flexibility. Our new css looks like this.</p>\n<div class=\"code\">\n<pre>\n.lined-paper{\n    background-image: -webkit-linear-gradient(bottom, rgba(230,230,200,0.4) 0, transparent 1px) 0 0;\n    background-image: -moz-linear-gradient(bottom, rgba(230,230,200,0.4) 0, transparent 1px) 0 0;\n    background-image: linear-gradient(bottom, rgba(230,230,200,0.4) 0, transparent 1px) 0 0;\n    -webkit-background-size: 100% 24px;\n    -moz-background-size: 100% 24px;\n    background-size: 100% 24px;\n}\n</pre>\n</div>\n<p>We are not using any image but instead working with css 3 gradients, this allows for transparency in the background and in the color of the line. We can easily change the colors and even reuse our styling with different color for different projects. The final note looks just like our original note.</p>\n<div class=\"center\">\n<div class=\"lined-paper\">This note is now build using no images<br />but css 3 gradients to create the lined background.</div>\n</div>\n<h2>Compatibility</h2>\n<p>Be aware that we are using state-of-the-art css which only works in modern browsers. As of this writing Internet Explorer does not support gradients. You have to decide for yourselves if this justifies an additional http-request or if you are happy with letting IE users and people using older browsers see a note without the lines.</p>','2012-05-16 23:02:11','css, webdesign','{\"meta_title\":\"Lined paper with only css3\",\"excerpt\":\"Creating a lined paper background always used to be easy, but with css 3 there is a way to creating this background without using even one image.\"}');
INSERT INTO `client_entries` VALUES (7,NULL,'hygromatik',3,1,2,'HygroMatik','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','2012-07-07 21:29:45','webdesign, branding','{\"images\":[4],\"card-image\":4,\"excerpt\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.\"}');
INSERT INTO `client_entries` VALUES (8,NULL,'css-kerning-ligatures',4,1,1,'Kerning & ligatures in css','<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n<h2>Some headline</h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>','2012-07-07 22:21:40','css, typography','{\"excerpt\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\"}');
INSERT INTO `client_entries` VALUES (9,NULL,'swift',3,1,1,'swift / we are fast','<div class=\"column column-five headline-column\">\n<h1 class=\"main-headline open_sans_bold\">swift / we are fast</h1>\n</div>\n<div class=\"section-menu open_sans\">\n<a href=\"#key_values\">key values</a>\n<a href=\"#logo_branding\">logo artwork</a>\n<a href=\"#corporate_colors\">colors</a>\n<a href=\"#print\">print materials</a>\n<a href=\"#digital\">digital</a>\n<a href=\"#corporate_fleet\">fleet & architecture</a>\n</div>\n<div class=\"column column-three open_sans\">\n<p class=\"excerpt\">Swift is a case study for an airline corporate identity which focuses on speed, comfort and trust.</p>\n</div>\n<div class=\"sections\">\n<section>\n<header class=\"column-five\"><span class=\"section-count\">section 001 /</span><h2 id=\"key_values\">key values</h2></header>\n<div class=\"no-style image center column column-two tablet-half\"><img data-id=\"4\" src=\"http://www/veare/images/swift-key-values.png\" alt=\"key values\"></div>\n<div class=\"column column-two left tablet-half\"><p><strong>comfort</strong> means the possibility to let go of the stress of everyday working life. It means enjoying the time you spent on the aircraft and to arrive relaxed and ready to start your day at your destination.</p>\n<p><strong>trust</strong> in your airline is essential to enjoy your flight. You should not have to worry about delays, loss of luggage or security issues. Once you arrive at the airport we will manage your luggage, transfers and make sure you do not miss your flight, while you take a well deserved break.</p>\n<p><strong>speed</strong> is what differentiates swift from other airlines. From booking to luggage pickup everything is optimized for speed. The airplane arrives at the airport before you do and will be ready for takeoff when you are. Spent more time at your destination and less time on the airport.</p>\n</div>\n</section>\n<section>\n<header class=\"column-five\">\n<span class=\"section-count\">section 002 /</span><h2 id=\"logo_branding\">Logo</h2></header>\n<div class=\"left no-style column column-four\">\n	<div class=\"slideshow\">\n		<div class=\"image-wrap\">\n			<div class=\"slide active\"><img data-src=\"http://www/veare/images/swift-logo-construction.jpg\" alt=\"key values\"></div>\n			<div class=\"slide\"><img data-src=\"http://www/veare/images/swift-logo-inverted.jpg\" alt=\"key values\"></div>\n			<div class=\"slide\"><img data-src=\"http://www/veare/images/swift-logo-lockup.jpg\" alt=\"key values\"></div>\n		</div>\n	</div>\n</div>\n<blockquote class=\"column column-four quote\">\n<p>Speed is the most important attribute of swift. This is why speed is present throughout the entire corporate design, including the company name and the logo.</p>\n</blockquote>\n<div class=\"column column-two\">\n	<p>Swift <span class=\"word-description\">[swɪft]</span> – happening quickly or promptly, moving or capable of moving at high speed.</p>\n</div>\n<div class=\"column column-two\">\n	<p>The logo is tilted towards the right, reflecting a forwards movement.</p>\n</div>\n</section>\n<section>\n<header class=\"column-five\">\n<span class=\"section-count\">section 003 /</span>\n	<h2 id=\"corporate_colors\">Corporate Colors</h2>\n</header>\n<div class=\"column column-five\">\n<div class=\"column column-one left\">\n	<div class=\"color\">\n		<div style=\"background-color: rgb(255,205,0); height: 75%;\"></div>\n		<div style=\"background-color: rgb(240,125,0); height: 5%;\"></div>\n		<div style=\"background-color: rgb(15,70,60); height: 20%;\"></div>\n	</div>\n<p>A good <strong>color balance</strong> is essential to create the right feeling with the used colors. Using mostly yellow emphasises the speed of swift, with a friendly orange and a calm green to show the relaxed feeling experienced when traveling with swift.</p>\n</div>\n<div class=\"column column-one left\">\n	<div class=\"color\">\n		<div class=\"color-main\" style=\"background-color: rgb(255,205,0);\"></div>\n		<div class=\"color-sub\" style=\"background-color: rgb(255,215,50);\"></div>\n		<div class=\"color-sub\" style=\"background-color: rgb(255,225,100);\"></div>\n		<div class=\"color-sub\" style=\"background-color: rgb(255,235,150);\"></div>\n	</div>\n<p><strong>Yellow</strong> is a warm color which stands for communication, joviality and understanding, but in this tone it also gives a feeling of the speed swift stands for.</p>\n</div>\n<div class=\"column column-one\">\n	<div class=\"color\">\n		<div class=\"color-main\" style=\"background-color: rgb(240,125,0);\"></div>\n		<div class=\"color-sub\" style=\"background-color: rgb(245,150,50);\"></div>\n		<div class=\"color-sub\" style=\"background-color: rgb(245,180,100);\"></div>\n		<div class=\"color-sub\" style=\"background-color: rgb(250,200,150);\"></div>\n	</div>\n<p><strong>Orange</strong> is a warm color like yellow and shares much of its meaning. It stands for energy and liveliness as well as relaxation. Combined with yellow it gives the swift corporate identity its friendly and open character.</p>\n</div>\n<div class=\"column column-one\">\n	<div class=\"color\">\n		<div class=\"color-main\" style=\"background-color: rgb(15,70,60);\"></div>\n		<div class=\"color-sub\" style=\"background-color: rgb(60,110,100);\"></div>\n		<div class=\"color-sub\" style=\"background-color: rgb(110,145,140);\"></div>\n		<div class=\"color-sub\" style=\"background-color: rgb(160,180,175);\"></div>\n	</div>\n<p><strong>Green</strong> stands for regeneration and recovery. Security, stability, confidence, hope and harmony. The darker tone of green produces a secure and regenerative atmosphere.</p>\n</div>\n<div class=\"column column-one\">\n	<div class=\"color\">\n		<div class=\"color-main\" style=\"background-color: rgb(65,65,65);\"></div>\n		<div class=\"color-sub\" style=\"background-color: rgb(85,85,85);\"></div>\n		<div class=\"color-sub\" style=\"background-color: rgb(105,105,105);\"></div>\n		<div class=\"color-sub\" style=\"background-color: rgb(125,125,125);\"></div>\n	</div>\n<p>Shades of <strong>grey</strong> provide a good contrast for text while they harmonize better with other colors thank black does.</p>\n</div>\n</section>\n<section>\n<header class=\"column-five\"><span class=\"section-count\">section 004 /</span><h2 id=\"print\">Print materials</h2></header>\n<div class=\"left no-style column column-four\">\n<div class=\"slideshow\">\n	<div class=\"image-wrap\">\n		<div class=\"slide active\"><img data-src=\"http://www/veare/images/swift-cards.jpg\" alt=\"swift bonus cards\"></div>\n		<div class=\"slide active\"><img data-src=\"http://www/veare/images/swift-ticket.jpg\" alt=\"swift boarding pass\"></div>\n		<div class=\"slide active\"><img data-src=\"http://www/veare/images/swift-paper.jpg\" alt=\"swift office material\"></div>	\n	</div>\n</div>\n</div>\n<blockquote class=\"column column-four quote\">\n<p>The corporate yellow is used for print materials like boarding passes and letters so they are easily associated with swift.</p>\n</blockquote>\n</section>\n<section>\n<header class=\"column-five\"><span class=\"section-count\">section 005 /</span><h2 id=\"digital\">Digital materials</h2></header>\n<div class=\"left no-style column column-four\">\n	<div class=\"slideshow\">\n		<div class=\"image-wrap\">\n			<div class=\"slide active\"><img data-src=\"http://www/veare/images/swift-website.jpg\" alt=\"swift website\"></div>\n			<div class=\"slide\"><img data-src=\"http://www/veare/images/swift-iphone-one.jpg\" alt=\"swift mobile app\"></div>\n			<div class=\"slide\"><img data-src=\"http://www/veare/images/swift-iphone-two.jpg\" alt=\"swift mobile app\"></div>\n		</div>\n	</div>\n</div>\n<blockquote class=\"column column-four quote\">\n<p>Speed is also present in the digital products, especially in the usability and the workflow of the applications.</p>\n</blockquote>\n<div class=\"column column-two\">\n<p>A fast user experience is created by focusing on the essential and providing easy access to common tasks like booking or checking flight dates.</p>\n</div>\n<div class=\"column column-two\">\n<p>The swift mobile app offers fast access to your customer data and boarding pass. It also provides convenient functions like temperature and weather for the current location as well as the destination.</p>\n</div>\n</section>\n<section>\n<header class=\"column-five\"><span class=\"section-count\">section 006 /</span><h2 id=\"corporate_fleet\">Corporate fleet & corporate architecture</h2></header>\n<div class=\"left no-style column column-four\">\n<div class=\"slideshow\">\n	<div class=\"image-wrap\">\n		<div class=\"slide active\"><img data-src=\"http://www/veare/images/swift-plane-one.jpg\" alt=\"swift plane\"></div>\n		<div class=\"slide\"><img data-src=\"http://www/veare/images/swift-tankwagen.jpg\" alt=\"swift fueling vehicle\"></div>\n		<div class=\"slide\"><img data-src=\"http://www/veare/images/swift-plane-two.jpg\" alt=\"swift plane\"></div>\n		<div class=\"slide\"><img data-src=\"http://www/veare/images/swift-flags.jpg\" alt=\"swift flags\"></div>\n		<div class=\"slide\"><img data-src=\"http://www/veare/images/swift-lounge.jpg\" alt=\"swift lounge vehicle\"></div>\n		<div class=\"slide\"><img data-src=\"http://www/veare/images/swift-checkin.jpg\" alt=\"swift checkin\"></div>\n	</div>\n</div>\n</div>\n<blockquote class=\"column column-four quote\">\n<p>The corporate values of swift are present in the fleet as well as in the architecture.</p>\n</blockquote>\n<div class=\"column column-two\">\n<p>The vehicles and planes are designed to look fast by using mostly yellow and the corporate pattern.</p>\n<p>The bright yellow combined with green gives swift a prominent presence on any airport.</p>\n</div>\n<div class=\"column column-two\">\n<p>The architectural design supports the main function of an area. Areas like the check-in counter are mostly yellow, emphasizing the speed and making it easy to find on the airport. Areas in which customers may spent more time, like the interior of an airplane or the lounge, are mostly dark green which gives a feeling of calmness and relaxation.</p>\n</div>\n</section>\n</div>','2012-07-07 22:24:34','corporate-identity, branding','{\"images\":[4],\"card-image\":4,\"category\":\"case-study\",\"excerpt\":\"Corporate Identity for an airline focusing on speed and comfort.\"}');
INSERT INTO `client_entries` VALUES (10,NULL,'isbb',3,1,1,'ISBB','<div class=\"column column-five headline-column\">\n<h1 class=\"main-headline open_sans_bold\">Institute Systemische Beratung Berlin</h1>\n</div>\n<div class=\"section-menu open_sans\">\n<a href=\"#overview\">overview</a>\n<a href=\"#structure\">structure</a>\n<a href=\"#calendar\">schedule page</a>\n<a href=\"#team\">team page</a>\n</div>\n<div class=\"column column-five open_sans excerpt\">\n<p class=\"column-three\">ISBB is an institute for coaching and consulting, its webpage is a hub for information for new applicants as well as people enrolled in the classes.</p>\n</div>\n<div class=\"sections\">\n<section class=\"full-width center\">\n<header class=\"column-five\"><span class=\"section-count\">section 001 /</span><h2 id=\"overview\">Overview</h2></header>\n<div class=\"left no-style column column-five\">\n<div class=\"slideshow\">\n<div class=\"image-wrap\">\n	<div class=\"slide active\"><img data-src=\"http://www/veare/images/isbb-home.png\" alt=\"key values\"></div>\n</div>\n</div>\n</div>\n</section>\n<section>\n<div class=\"column column-two left tablet-half\">\n	<p>The ISBB has two main user groups, people who are interested in the classes and people who signed up and are looking for news or information like scheduled classes.</p>\n</div>\n<div class=\"column column-two left tablet-half\">\n	<p>To satisfy both user groups the homepage features a news overview as well as some information about the institute itself.</p>\n</div>\n</section>\n<section>\n<header class=\"column-five\"><span class=\"section-count\">section 002 /</span><h2 id=\"structure\">Information Architecture</h2></header>\n<div class=\"left no-style column column-four\">\n<div class=\"slideshow\">\n	<div class=\"image-wrap\">\n		<div class=\"slide active\"><img data-src=\"http://www/veare/images/isbb-map.jpg\" alt=\"key values\"></div>\n		<div class=\"slide\"><img data-src=\"http://www/veare/images/isbb-sitemap.jpg\" alt=\"key values\"></div>\n	</div>\n</div>\n</div>\n<blockquote class=\"column column-four quote\">\n<p>To target to so very different user groups, one has to stray away from the trodden path.</p>\n</blockquote>\n<div class=\"column column-two\">\n<p>The navigation items are home, vocational training, schedule, about the institute, team, projects and contact. Additionally there is a quick-link to sign up for the training.</p>\n<p>This rather uncommon page architecture makes it possible to deliver content to our the user groups quickly and without searching for it.</p>\n</div>\n<div class=\"column column-two\">\n<p>The first menu item reveals the information about the training itself. Potential clients need to find this information fast, because they are more inclined to leave the page \nthan people who are looking for follow-up information.</p>\n<p>Once they are eager to sign up they can browse the information for attendees like classes or team to get a more in depth idea of the training until they are ready to click the sign up button.</p>\n</div>\n</section>\n<section>\n<header class=\"column-five\">\n<span class=\"section-count\">section 003 /</span><h2 id=\"calendar\">Schedule</h2>\n</header>\n<div class=\"column column-five\">\n<div class=\"column column-two tablet-half\">\n	<p>The <strong>schedule</strong> gives a quick overview over all the classes for the current training.</p>\n	<p>The day it starts is highlighted, but it also shows the full range of days for each class. The trainers are displayed below ever class and a short description gives an \n		idea of what to expect from each particular class.</p>\n</div>\n	<div class=\"column column-two tablet-half\">\n		<div class=\"slideshow border\">\n		<div class=\"image-wrap\">\n			<div class=\"slide active\"><img data-src=\"http://www/veare/images/isbb-calendar.png\" alt=\"key values\"></div>\n		</div>\n		</div>\n		</div>\n	</div>\n</div>\n</section>\n<section>\n<header class=\"column-five\">\n<span class=\"section-count\">section 004 /</span><h2 id=\"team\">Team Page</h2>\n</header>\n<div class=\"column column-five\">\n<div class=\"slideshow column-five\">\n	<div class=\"image-wrap\">\n		<div class=\"slide active\"><img data-src=\"http://www/veare/images/isbb-team.jpg\" alt=\"key values\"></div>\n	</div>\n</div>\n<blockquote class=\"column column-four quote\">\n<p>The team page allows the user to get an idea of who they are dealing with in the workshops.</p>\n</blockquote>\n<div class=\"column column-two tablet-half\">\n		<p>Trainers are displayed in an order randomly generated on page load, as to not rank them.<br />A label shows their current role within the team.</p>\n	</div>\n	<div class=\"column column-two tablet-half\">\n		<p>By hovering the images one can get a short description of the working expertise of each trainer as well as a link to their website for more information.</p>\n	</div>\n</div>\n</section>\n</div>','2012-07-07 22:34:28','webdesign, branding','{\"images\":[4],\"card-image\":4,\"excerpt\":\"Website redesign for a german institute for consultancy.\",\"category\":\"web-design\"}');
INSERT INTO `client_entries` VALUES (11,NULL,'/kerning-css',4,1,1,'Kerning with css','<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n<h2>Some headline</h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>','2012-07-10 02:13:59',NULL,NULL);
INSERT INTO `client_entries` VALUES (12,NULL,'juicecontrol',3,NULL,2,'JuiceControl','Lorem','2012-08-12 22:49:41',NULL,'{\"images\":[4],\"card-image\":4,\"excerpt\":\"Dolor sit amet, consectetur adipisicing elit, sed do incididunt ut labore et dolore magna aliqua.\"}');
INSERT INTO `client_entries` VALUES (13,NULL,'diversity-squared',3,NULL,1,'D2 - Diversity Squared',NULL,'2012-08-12 22:51:58',NULL,'{\"images\":[4],\"card-image\":4,\"excerpt\":\"An iPad magazine for people who recently moved to Berlin.\"}');
INSERT INTO `client_entries` VALUES (14,NULL,'gzo-r2',3,NULL,2,'GZO & R2',NULL,'2012-08-12 22:53:01',NULL,'{\"images\":[4],\"card-image\":4,\"excerpt\":\"Dolor sit amet, consectetur adipisicing elit, lorem impsum sed do eiusmod tempor incididunt ut labore et aliqua.\"}');
INSERT INTO `client_entries` VALUES (15,NULL,'partymob',3,NULL,2,'PartyMob',NULL,'2012-08-12 22:59:14',NULL,'{\"images\":[4],\"card-image\":4,\"excerpt\":\"Dolor sit amet, consectetur adipisicing elit, lorem impsum sed do eiusmod tempor incididunt ut labore et aliqua lorem.\"}');
INSERT INTO `client_entries` VALUES (16,NULL,'finest-alterations',3,NULL,2,'Finest Alterations','Finest Alterations','2012-08-12 23:01:31',NULL,'{\"images\":[4],\"card-image\":4,\"excerpt\":\"Dolor sit amet, consectetur adipisicing elit, lorem impsum sed do eiusmod tempor incididunt ut labore et aliqua lorem.\"}');
INSERT INTO `client_entries` VALUES (17,NULL,'worx',3,NULL,2,'Worx cms',NULL,'2012-08-12 23:01:50',NULL,'{\"images\":[4],\"card-image\":4,\"excerpt\":\"Dolor sit amet, consectetur adipisicing elit, impsum sed do eiusmod tempor incididunt ut labore et aliqua lorem.\"}');
INSERT INTO `client_entries` VALUES (18,NULL,'donnerwetter-2010',3,NULL,2,'Donnerwetter 2010',NULL,'2012-08-12 23:04:13',NULL,'{\"images\":[4],\"card-image\":4,\"excerpt\":\"Dolor sit amet, consectetur adipisicing elit, impsum sed do eiusmod tempor incididunt ut labore et aliqua lorem.\"}');
INSERT INTO `client_entries` VALUES (19,NULL,'zugvoegel',3,NULL,2,'Zugvögel',NULL,'2012-08-12 23:07:03',NULL,'{\"images\":[4],\"card-image\":4,\"excerpt\":\"Dolor sit amet, consectetur adipisicing elit, impsum sed do eiusmod tempor incididunt ut labore et aliqua lorem.\"}');
INSERT INTO `client_entries` VALUES (20,NULL,'woyzeck-in-3-layers',3,NULL,2,'Woyzeck in 3 layers',NULL,'2012-08-12 23:08:26',NULL,'{\"images\":[4],\"card-image\":4,\"excerpt\":\"Dolor sit amet, consectetur adipisicing elit, impsum sed do eiusmod tempor incididunt ut labore et aliqua lorem.\"}');
INSERT INTO `client_entries` VALUES (21,NULL,'listros',3,NULL,2,'Listros',NULL,'2012-08-12 23:09:45',NULL,'{\"images\":[4],\"card-image\":4,\"excerpt\":\"Dolor sit amet, consectetur adipisicing elit, impsum sed do eiusmod tempor incididunt ut labore et aliqua lorem.\"}');
/*!40000 ALTER TABLE `client_entries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_menu`
--

DROP TABLE IF EXISTS `client_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client_menu` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `label` varchar(50) NOT NULL,
  `path` varchar(255) NOT NULL,
  `type` tinyint(1) NOT NULL DEFAULT '0',
  `menu` int(2) DEFAULT NULL,
  `parent_id` tinyint(5) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `position` tinyint(2) NOT NULL,
  `language` tinyint(3) DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_menu`
--

LOCK TABLES `client_menu` WRITE;
/*!40000 ALTER TABLE `client_menu` DISABLE KEYS */;
INSERT INTO `client_menu` VALUES (1,'Portfolio','/portfolio',1,1,0,1,1,1,'{\"class\":\"portfolio arrow\",\"base_default\":\"1\"}');
INSERT INTO `client_menu` VALUES (2,'Blog','/blog',1,1,0,0,2,1,'{\"class\":\"blog arrow\"}');
INSERT INTO `client_menu` VALUES (3,'About','/about',1,1,0,1,3,1,'{\"class\":\"about\"}');
INSERT INTO `client_menu` VALUES (4,'Labs','/labs',1,1,0,0,4,1,'{\"class\":\"labs arrow\"}');
INSERT INTO `client_menu` VALUES (5,'Contact','/contact',1,1,0,1,5,1,'{\"class\":\"contact\"}');
/*!40000 ALTER TABLE `client_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_short_url`
--

DROP TABLE IF EXISTS `client_short_url`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client_short_url` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `short_url` varchar(30) DEFAULT NULL,
  `long_url` varchar(255) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` int(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `short_url` (`short_url`),
  UNIQUE KEY `long_url` (`long_url`),
  KEY `status` (`status`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_short_url`
--

LOCK TABLES `client_short_url` WRITE;
/*!40000 ALTER TABLE `client_short_url` DISABLE KEYS */;
/*!40000 ALTER TABLE `client_short_url` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_data`
--

DROP TABLE IF EXISTS `cms_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_data` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `key` varchar(15) NOT NULL,
  `type` varchar(30) DEFAULT NULL,
  `data` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `key` (`key`,`type`)
) ENGINE=MyISAM AUTO_INCREMENT=93 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_data`
--

LOCK TABLES `cms_data` WRITE;
/*!40000 ALTER TABLE `cms_data` DISABLE KEYS */;
INSERT INTO `cms_data` VALUES (4,'settings','page_name','{\"1\":\"Form&System\",\"7\":\"Form&System\"}');
INSERT INTO `cms_data` VALUES (1,'languages','language','{\"_id\":1,\"abbr\":\"de\",\"status\":1,\"name\":\"deutsch\",\"self_name\":\"deutsch\",\"position\":1,\"flag\":\"de\"}');
INSERT INTO `cms_data` VALUES (7,'languages','language','{\"_id\":2,\"abbr\":\"en\",\"status\":1,\"name\":\"englisch\",\"self_name\":\"english\",\"position\":2,\"flag\":\"/media/layout/en.png\"}');
INSERT INTO `cms_data` VALUES (82,'system','cms','{\"_id\":\"1\",\"label\":\"From&System\",\"name\":\"formandsystem\",\"url\":\"http:\\/\\/www.formandsystem.com\",\"db_prefix\":\"cms_\",\"db_menu\":\"menu\",\"db_data\":\"data\",\"db_entries\":\"entries\",\"db_log\":\"log\",\"db_users\":\"users\",\"base\":\"formandsystem_future\"}');
INSERT INTO `cms_data` VALUES (2,'settings','menu','{\"_id\":\"1\",\"menu_id\":1,\"name\":\"main\",\"label\":\"Hauptmenü\",\"class_lvl_0\":\"main-menu\",\"class_lvl_1\":\"main-submenu\",\"sub_before\":\"<div class=\'main-submenu-wrapper\'>\",\"sub_after\":\"</div>\"}');
INSERT INTO `cms_data` VALUES (12,'system','system','{\"_id\":\"2\",\"label\":\"veare\",\"name\":\"veare\",\"position\":\"1\",\"url\":\"http:\\/\\/www.veare.net\",\"prefix\":\"vr_\",\"db_menu\":\"menu\",\"db_data\":\"data\",\"db_entries\":\"entries\",\"default\":\"0\"}');
INSERT INTO `cms_data` VALUES (14,'settings','logo','{\"_id\":\"1\",\"file\":\"media/layout/formandsystem_logo.png\",\"logo_url\":\"http://www.formandsystem.com\",\"logo_alt\":\"Form& System\"}');
INSERT INTO `cms_data` VALUES (15,'settings','compression','{\"_id\":\"html\",\"compression\":\"TRUE\",\"gzip\":\"TRUE\",\"expire\":\"3600\"}');
INSERT INTO `cms_data` VALUES (78,'user','group','{\"_id\":\"1\",\"name\":\"Admin\",\"rights\":[1,2,4,8,10]}');
INSERT INTO `cms_data` VALUES (83,'settings','logo','{\"_id\":\"2\",\"file\":\"media/layout/formandsystem_logo.png\",\"logo_url\":\"http://www.formandsystem.com\",\"logo_alt\":\"Form& System\"}');
INSERT INTO `cms_data` VALUES (3,'settings','menu','{\"_id\":\"2\",\"menu_id\":2,\"name\":\"meta\",\"label\":\"Metamenü\",\"class_lvl_0\":\"meta-menu\",\"class_lvl_1\":\"meta-submenu\",\"sub_before\":\"<div class=\'main-submenu-wrapper\'>\"}');
INSERT INTO `cms_data` VALUES (77,'system','system','{\"_id\":\"3\",\"label\":\"client\",\"name\":\"client\",\"position\":\"3\",\"url\":\"http:\\/\\/www.gzo-gmbh.com\",\"prefix\":\"client_\",\"db_menu\":\"menu\",\"db_data\":\"data\",\"db_entries\":\"entries\",\"db_files\":\"files\",\"base\":\"/gzo_new/\",\"media\":\"media/\",\"default\":\"1\"}');
INSERT INTO `cms_data` VALUES (79,'user','right','{\"_id\":\"1\",\"name\":\"Upload Media\",\"description\":\"Upload media files to the cms or specific posts.\"}');
INSERT INTO `cms_data` VALUES (80,'user','group','{\"_id\":\"2\",\"name\":\"Standard\",\"rights\":[1,2,4,8,10]}');
INSERT INTO `cms_data` VALUES (81,'user','group','{\"_id\":\"3\",\"name\":\"GZO User\",\"rights\":[1,2,4,8,10]}');
INSERT INTO `cms_data` VALUES (84,'settings','compression','{\"_id\":\"js\",\"compression\":\"TRUE\",\"gzip\":\"TRUE\",\"minify\":\"TRUE\",\"expire\":\"3600\"}');
INSERT INTO `cms_data` VALUES (85,'settings','compression','{\"_id\":\"css\",\"compression\":\"TRUE\",\"gzip\":\"TRUE\",\"expire\":\"3600\"}');
INSERT INTO `cms_data` VALUES (86,'settings','log','{\"_id\":1,\"log_type\":\"login_error\"}');
INSERT INTO `cms_data` VALUES (87,'settings','log','{\"_id\":2,\"log_type\":\"login_success\"}');
INSERT INTO `cms_data` VALUES (88,'settings','log','{\"_id\":3,\"log_type\":\"login_retrieval\"}');
INSERT INTO `cms_data` VALUES (89,'settings','email_support','{\"1\":\"support@formandsystem.com\"}');
INSERT INTO `cms_data` VALUES (90,'settings','log','{\"_id\":4,\"log_type\":\"login_retrieval_error\"}');
INSERT INTO `cms_data` VALUES (91,'settings','menu','{\"_id\":\"3\",\"menu_id\":1,\"name\":\"sub\",\"label\":\"Submenü\",\"class_lvl_0\":\"sub-menu\",\"lvl\":\"1\",\"start_lvl\":\"2\",\"item_class\":\"submenu-item\",\"item_before\":\"<span class=\'sub-item-span\'>\",\"item_after\":\"</span>\",\"sub_after\":\"</div>\",\"hide\":[\"shortcut\"]}');
INSERT INTO `cms_data` VALUES (92,'settings','base_url','http://new.ve.re');
/*!40000 ALTER TABLE `cms_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_entries`
--

DROP TABLE IF EXISTS `cms_entries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_entries` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `menu_id` int(5) DEFAULT NULL,
  `type` tinyint(1) NOT NULL DEFAULT '1',
  `language` int(2) DEFAULT NULL,
  `status` int(2) DEFAULT NULL,
  `title` varchar(250) NOT NULL,
  `text` text,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tags` text,
  `data` text,
  PRIMARY KEY (`id`),
  KEY `menu_id` (`menu_id`,`type`,`status`),
  KEY `language` (`language`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_entries`
--

LOCK TABLES `cms_entries` WRITE;
/*!40000 ALTER TABLE `cms_entries` DISABLE KEYS */;
INSERT INTO `cms_entries` VALUES (1,0,1,1,1,'lukas','','2012-04-17 22:35:02','','{\"user\":\"username\",\"tags\":{\"iser\":\"hans\",\"user\":{\"iser\":\"hans\",\"user\":\"peter\"}}}');
INSERT INTO `cms_entries` VALUES (2,1,2,1,1,'Peter','','2012-04-17 22:35:08','','{\"tags\":{\"iser\":\"hans\",\"user\":{\"iser\":\"hans\",\"user\":\"peter\"}}}');
INSERT INTO `cms_entries` VALUES (3,2,1,0,0,'peter','','2012-04-18 23:03:14','','{\"user\":\"lukas\",\"time\":\"now\"}');
INSERT INTO `cms_entries` VALUES (4,2,1,0,0,'peter','','2012-04-18 23:03:16','','{\"user\":\"lukas\",\"time\":\"now\"}');
/*!40000 ALTER TABLE `cms_entries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cms_menu`
--

DROP TABLE IF EXISTS `cms_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_menu` (
  `id` int(5) NOT NULL DEFAULT '0',
  `label` varchar(50) NOT NULL,
  `path` varchar(255) NOT NULL,
  `type` tinyint(1) NOT NULL DEFAULT '0',
  `menu` int(2) DEFAULT NULL,
  `parent_id` tinyint(5) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `position` tinyint(2) NOT NULL,
  `language` tinyint(3) DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_menu`
--

LOCK TABLES `cms_menu` WRITE;
/*!40000 ALTER TABLE `cms_menu` DISABLE KEYS */;
INSERT INTO `cms_menu` VALUES (1,'Dashboard','/dashboard',1,1,0,1,1,1,'{\"title\":\"Dashboard\",\"group\":\"*\",\"base_default\":\"1\"}');
INSERT INTO `cms_menu` VALUES (2,'Menü','/navigation',1,1,0,1,2,1,'{\"group\":[1,2]}');
INSERT INTO `cms_menu` VALUES (3,'Inhalte','/content',2,1,0,1,3,1,'{\"group\":\"*\"}');
INSERT INTO `cms_menu` VALUES (4,'Neuer Eintrag','/content/new',1,1,3,1,1,1,'{\"group\":[1,2,3]}');
INSERT INTO `cms_menu` VALUES (5,'[seperator]','',0,1,3,1,2,1,'');
INSERT INTO `cms_menu` VALUES (8,'Einträge','/content/edit',1,1,3,1,3,1,'{\"default\":\"1\",\"group\":[1,2,3]}');
INSERT INTO `cms_menu` VALUES (12,'Einstellungen','/settings',2,1,0,1,6,1,'{\"group\":[1,2]}');
INSERT INTO `cms_menu` VALUES (13,'Suchmaschinen','/settings/seo',1,1,12,1,3,1,'{\"group\":[1,2],\"code_id\":\"seo\"}');
INSERT INTO `cms_menu` VALUES (14,'Sprachen','/settings/languages',1,1,12,1,2,1,'{\"code_id\":\"languages\",\"group\":[1]}');
INSERT INTO `cms_menu` VALUES (15,'Allgemein','/settings/general',1,1,12,1,1,1,'{\"group\":[1,2]}');
INSERT INTO `cms_menu` VALUES (16,'Abmelden','/logout',1,2,0,1,3,1,'{\"title\":\"Abmelden\",\"class\":\"icon logout\",\"item_id\":\"logout_button\",\"img-only\":\"true\",\"group\":\"*\"}');
INSERT INTO `cms_menu` VALUES (17,'[Profil]','/profile',2,2,0,1,1,1,'{\"title\":\"Ihr Profil\",\"group\":\"*\"}');
INSERT INTO `cms_menu` VALUES (18,'Medien','/media',2,1,0,1,4,1,'{\"group\":\"*\"}');
INSERT INTO `cms_menu` VALUES (19,'Benutzer','/user',2,1,0,1,5,1,'{\"group\":[1,2]}');
INSERT INTO `cms_menu` VALUES (20,'Kanäle','/content/channels',1,1,3,1,5,1,'{\"group\":{\"0\":\"1\"}}');
INSERT INTO `cms_menu` VALUES (27,'Suchfunktion','/settings/search',1,1,12,1,4,1,'{\"group\":[1]}');
INSERT INTO `cms_menu` VALUES (21,'Allgemein','/profile/general',1,2,17,1,3,1,'{\"default\":\"1\",\"group\":{\"0\":\"1\",\"1\":\"2\"}}');
INSERT INTO `cms_menu` VALUES (22,'Einstellungen','/profile/settings',1,2,17,1,5,1,'{\"code_id\":\"settings\",\"group\":{\"0\":\"1\"}}');
INSERT INTO `cms_menu` VALUES (23,'Nachrichten','/profile/messages',1,2,17,1,6,1,'{\"group\":{\"0\":\"1\"}}');
INSERT INTO `cms_menu` VALUES (24,'Kalender','/profile/calendar',1,2,17,1,7,1,'{\"group\":{\"0\":\"1\"}}');
INSERT INTO `cms_menu` VALUES (25,'Öffentliches Profil','/profile/public-profile',1,2,17,1,9,1,'{\"group\":{\"0\":\"1\"}}');
INSERT INTO `cms_menu` VALUES (26,'[seperator]','',0,2,17,1,8,1,'');
INSERT INTO `cms_menu` VALUES (28,'[seperator]','',0,1,12,1,5,1,'');
INSERT INTO `cms_menu` VALUES (29,'CMS','/settings/cms',1,1,12,1,6,1,'{\"group\":[1]}');
INSERT INTO `cms_menu` VALUES (30,'Alles','/media/all',1,1,18,1,1,1,'');
INSERT INTO `cms_menu` VALUES (31,'Bilder','/media/images',1,1,18,1,2,1,'');
INSERT INTO `cms_menu` VALUES (32,'Dokumente','/media/files',1,1,18,1,3,1,'');
INSERT INTO `cms_menu` VALUES (33,'Videos & Musik','/media/videos-sounds',1,1,18,1,4,1,'{\"group\":{\"0\":\"1\",\"1\":\"2\"}}');
INSERT INTO `cms_menu` VALUES (34,'Layout','/content/templates',1,1,3,1,4,1,'{\"shortcut\" : \"alt +  t\",\"group\":{\"0\":\"1\"}}');
INSERT INTO `cms_menu` VALUES (35,'[seperator]','',0,1,3,1,6,1,'');
INSERT INTO `cms_menu` VALUES (36,'Kategorien','/content/categories',1,1,3,1,7,1,'{\"group\":{\"0\":\"1\"}}');
INSERT INTO `cms_menu` VALUES (37,'Tags','/content/tags',1,1,3,1,8,1,'{\"group\":{\"0\":\"1\"}}');
INSERT INTO `cms_menu` VALUES (38,'Login','/login',1,1,0,1,2,1,'{\"group\":\"x\"}');
INSERT INTO `cms_menu` VALUES (39,'[seperator]','',0,1,17,1,2,1,'');
INSERT INTO `cms_menu` VALUES (40,'Switch User','%/switch-user',4,1,17,1,1,1,'');
INSERT INTO `cms_menu` VALUES (42,'Neuer Benutzer','/user/add',1,1,19,1,1,1,'{\"group\":[1,2]}');
INSERT INTO `cms_menu` VALUES (43,'[seperator]','',0,1,19,1,2,1,'');
INSERT INTO `cms_menu` VALUES (44,'Benutzer bearbeiten','/user/edit',1,1,19,1,3,1,'{\"default\":\"1\",\"group\":[1,2]}');
INSERT INTO `cms_menu` VALUES (45,'Gruppen','/user/groups',1,1,19,1,4,1,'');
/*!40000 ALTER TABLE `cms_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `filename` varchar(100) DEFAULT NULL,
  `status` int(2) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`id`),
  KEY `filename` (`filename`,`status`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (1,'lukas-oppermann',1,'0000-00-00 00:00:00','{\"ext\":\"jpg\"}');
INSERT INTO `files` VALUES (2,'default-profile',1,'0000-00-00 00:00:00','{\"ext\":\"jpg\"}');
INSERT INTO `files` VALUES (4,'swift-logo-card',1,NULL,'{\"ext\":\"png\"}');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `user_ip` varchar(30) DEFAULT NULL,
  `user_id` int(5) DEFAULT NULL,
  `system` int(2) DEFAULT NULL,
  `type` int(2) DEFAULT NULL,
  `entry_id` int(2) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data` text,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`,`system`),
  KEY `type` (`type`,`entry_id`),
  KEY `user_ip` (`user_ip`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log`
--

LOCK TABLES `log` WRITE;
/*!40000 ALTER TABLE `log` DISABLE KEYS */;
/*!40000 ALTER TABLE `log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `token` varchar(100) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `email` varchar(50) NOT NULL,
  `user` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(50) DEFAULT NULL,
  `group` tinyint(2) DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`id`),
  KEY `email` (`email`,`user`)
) ENGINE=MyISAM AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'xo7WEsypf6alhXD2BGS9I8TlqMy8ZjrAL3wjwtLZlbxYfPGeh88KBA7Vu3Z4gJy285b92BQnXqdvNkrtBKKTIZdHJcX',1,'oppermann.lukas@googlemail.com','lukas','80bf5356adcabdf46f2cfca2847b994056392df38426230a9e121a51acf9400dea6c5235fc1298f7cff6fcb4d51f9b8d8539c0fbfb45fa4b1e892c9b6880878a','3W9v1ninvd6fEjMLPM7O',1,'{\"keep_login\":\"TRUE\",\"firstname\":\"lukas\",\"lastname\":\"oppermann\",\"profile_image\":1,\"images\":[1],\"attempts\":0,\"attempt_time\":1338847027,\"retrieval_key\":\"bMLrdsaPIyTUcMdcn8O2lm6KBrBIFx8tKjeC2SujwgZPi1TEMfFDi30AuYDaaJEqdTpj4tp2LrGzVYjykNuSOsVpxqrCAk\",\"retrieval_time\":1338011731}');
INSERT INTO `users` VALUES (2,'lzb7M2CJdtWO2XMcWEkeVPXxnXFapkMvPiEZMLUCsGvKgPMsrwH4YaT3qLcujkmZoAD1M9PR9CndWNsiGOczkHaK5JLVPM',1,'user@user.de','user','d42a27679a8a448ceecbf6527fae35e158a395647256fc9d8dbbbb6e95c805e20ed7921723de78cb486365848caca03193c7255f596463621cebae46b6504813','3W9v1ninvd6fEjMLPM7O',2,'{\"keep_login\":false,\"firstname\":\"user\",\"lastname\":\"lastname\",\"attempts\":19,\"attempt_time\":1338003035,\"retrieval_key\":\"rHcThTYx1vQBCeeYCrzApLz2ndB9hlYTiWY3umAu3ztfgdNI4N1i9ltVUHhn6kYB9Ogdw7hPIzJjoqEOlI3cgr4lSjndYg\",\"retrieval_time\":1335693040}');
INSERT INTO `users` VALUES (38,'',1,'admin@formandsystem.com','admin','9a6bb2d30ab0e1fdd8ae503b97cec39523730100f2236f9368fedb1364d337a6864fed4b95049fde7b80fc057b3ab438e67eaa2086c93a15d03ebc48c7ed62c6','kBErwuVJPHplhUvQEUoT',1,'{\"keep_login\":false,\"firstname\":\"admin\",\"lastname\":null,\"attempts\":6,\"attempt_time\":1337782250}');
INSERT INTO `users` VALUES (37,'tpa1dyFvuqNIOuvoTkWGCQyBW6hY3jyeyVXPM55n0ZUodLWGGl1bdCi3CseUmcVbLcxqkcy47GGou',1,'test@user.com','dirk','bb361a8c4845f012055f383f22d643ad863b663fdcd8ae5a642a23054d8c3116cee9a6f0f1a09e27170bdd1f1cb3db593e37c8558c77d7c6aec8be04bdcf8705','stOLL3W68jQaWcixi40',3,'{\"keep_login\":\"TRUE\",\"firstname\":\"Lukas\",\"lastname\":\"Oppermanns\",\"retrieval_key\":\"fscOg7lsPNlIQd98Jkm06Afi18mB0mEIVzlgm7B7YEjJA52wtqzZsCoQXkjXSULRHm0CIh5M95X89jLjc\",\"retrieval_time\":1335693058,\"attempts\":3,\"attempt_time\":1337782274}');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-11-11 17:37:13
