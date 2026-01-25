import sys
import platform

print("Ciao. Sono Python Portable")

print(sys.version)

import http.server
import socketserver
import sys

PORT = 8000 if len(sys.argv) < 2 else int(sys.argv[1])

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving HTTP on 0.0.0.0 port {PORT} (http://0.0.0.0:{PORT}/) ...")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
