#!/bin/bash
#author:
#script:
#usage:

#  输入打印格式，赋值给input, tablename变量
#  tablename='users'
#  input='+---------+---------------+
#  | Column  | Type          |
#  +---------+---------------+
#  | id      | int(11)       |
#  | name    | varchar(500)  |
#  | surname | varchar(1000) |'

tablename='users'

# 新建表

input='+---------+---------------+
| Column  | Type          |
+---------+---------------+
| id      | int(11)       |
| name    | varchar(500)  |
| surname | varchar(1000) |'

echo "$input" | sed 's/[[:space:]]*|[[:space:]]*/|/g' | awk -v Tablename=$tablename '
BEGIN{ 
    ORS=""; 
    FS="|"; 
    print "\n\nCREATE TABLE `"Tablename"` \n(\n";
}
{
    if(NR>4){ print "\t, "; } 
    if(NR==4){ print "\t "; } 
    if(NR>3){ print "`"$2"` "$3" NULL\n"; }
}
END{ print ");\n\n"; }'

# 显示结果
# CREATE TABLE `users`
# (
#    `1` luther NULL
#   , `2` fluffy NULL
#   , `3` wu NULL
#   , `4` NULL NULL
# );

# 插入数据

input='+----+--------+------------+
| ID | NAME   | SURNAME    |
+----+--------+------------+
| 1  | luther | blisset    |
| 2  | fluffy | bunny      |
| 3  | wu     | ming       |
| 4  | NULL   | nameisnull |'

echo "$input" | sed 's/[[:space:]]*|[[:space:]]*/|/g' | awk -v Tablename=$tablename '
BEGIN{ 
    ORS="";
    FS="|";
    print "\n\nINSERT INTO `"Tablename"` (\n";
}
{ 
    if(NR==2){ 
        print "\t"$2; 
        for(i=3; i<NF; i++){ print ", "$i; }
        print "\n) VALUES (\n"; 
    } 
    if(NR>3){ 
        print "\t"$2;
        for(i=3; i<NF; i++){ print ", "$i; } 
        print "\n"; 
    } 
}
END{ print ");\n\n"; }'

# 显示结果
# INSERT INTO `users` (
#   ID, NAME, SURNAME
#  ) VALUES (
#   1, luther, blisset
#   2, fluffy, bunny
#   3, wu, ming
#   4, NULL, nameisnull
# );
