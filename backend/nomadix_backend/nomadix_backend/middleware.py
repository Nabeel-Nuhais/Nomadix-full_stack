import datetime
from django.utils.deprecation import MiddlewareMixin


class RequestLoggerMiddleware(MiddlewareMixin):
    def process_request(self, request):
        print(f"[{datetime.datetime.now()}] {request.method} request made to {request.path}")
        
    def process_response(self, request, response):
        print(f"[{datetime.datetime.now()}] Response status: {response.status_code}")
        return response
        