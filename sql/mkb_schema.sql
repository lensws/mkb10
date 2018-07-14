CREATE TABLE class_mkb (
  id int(11) NOT NULL auto_increment COMMENT 'PK',
  `name` varchar(512) NOT NULL COMMENT 'Наименование',
  `code` varchar(20) NOT NULL COMMENT 'Код',
  parent_id int(11) default NULL COMMENT 'Вышестоящий объект',
  parent_code varchar(20) default NULL COMMENT 'Код вышестоящего объекта',
  node_count smallint(6) NOT NULL default '0' COMMENT 'Количество вложенных в текущую ветку',
  additional_info text COMMENT 'Дополнительные данные',
  PRIMARY KEY  (id),
  KEY parent_id (parent_id),
  KEY parent_code (parent_code)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='МКБ-10 Международный классификатор болезней';
ALTER TABLE `class_mkb`
  ADD CONSTRAINT class_mkb_ibfk_1 FOREIGN KEY (parent_id) REFERENCES class_mkb (id);
