#!/usr/bin/env python
# -*- coding:utf-8 -*-
###
# File: /SimpleHttp.py
# Project: oscp
# Created Date: Wednesday, October 11th 2017, 10:02:23 am
# Author: yanyan.yyy
# -----
# Last Modified: Wed Oct 11 2017
# Modified By: yanyan.yyy
# -----
###


import sys
import BaseHTTPServer
from SimpleHTTPServer import SimpleHTTPRequestHandler

HandlerClass = SimpleHTTPRequestHandler
ServerClass  = BaseHTTPServer.HTTPServer
Protocol     = "HTTP/1.0"

if sys.argv[1:]:
    port = int(sys.argv[1])
else:
    port = 8000
server_address = ('0.0.0.0', port)
 
HandlerClass.protocol_version = Protocol
httpd = ServerClass(server_address, HandlerClass)
 
sa = httpd.socket.getsockname()
print "Serving HTTP on", sa[0], "port", sa[1], "..."
httpd.serve_forever()
