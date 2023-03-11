from rest_framework.pagination import PageNumberPagination

class MyPagination(PageNumberPagination):
  page_size = 10
  page_query_param = 'p'
  page_size_query_param = 'records'
  max_page_size = 100