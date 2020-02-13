"""Integrate with admin module."""
from .models import File, FileVersion
from django.contrib import admin

classes = [File, FileVersion]

for c in classes:
    admin.site.register(c)
