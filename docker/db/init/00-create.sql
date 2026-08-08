DROP TABLE IF EXISTS `Item`;
CREATE TABLE `Item` (
    `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,

    `name` varchar(255) NOT NULL,

    `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `Item` (`name`) VALUES
('foo'),
('bar'),
('hoge'),
('fuga');
