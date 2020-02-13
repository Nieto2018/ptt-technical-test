"""Declare models for users app."""
from django.contrib.auth.models import User
from django.db import models
from django.db.models.constraints import UniqueConstraint
import datetime


class DateTimeModel(models.Model):
    """ A base model with created and edited datetime fields """

    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class File(DateTimeModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    path = models.CharField(max_length=255)

    def __unicode__(self):
        return '{} - {}'.format(self.name, self.path)

    def __str__(self):
        return '{} - {}'.format(self.name, self.path)


def user_directory_path(instance, filename):
    path = instance.file_info.path if instance.file_info.path else 'default'
    return '/store/{0}/{1}/{2}'.format(path, instance.version, filename)


class FileVersion(DateTimeModel):
    file_info = models.ForeignKey(File, on_delete=models.CASCADE, related_name="file_version")
    file = models.FileField(upload_to=user_directory_path)
    version = models.PositiveIntegerField(default=0)
    UniqueConstraint(fields=['file_info', 'version'], name='unique_file_version')

    def __unicode__(self):
        return '{} - {}'.format(self.file_info.name, self.version)

    def __str__(self):
        return '{} - {}'.format(self.file_info.name, self.version)
