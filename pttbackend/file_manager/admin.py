"""Integrate with admin module."""
from .models import File
from django.contrib import admin

classes = [File]

for c in classes:
    admin.site.register(c)
