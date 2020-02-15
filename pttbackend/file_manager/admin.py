"""Integrate with admin module."""
from .models import File, FileRevision
from django.contrib import admin

classes = [File, FileRevision]

for c in classes:
    admin.site.register(c)
