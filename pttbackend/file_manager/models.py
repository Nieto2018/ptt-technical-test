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
        return '{} - {}'.format(self.path, self.name)

    def __str__(self):
        return '{} - {}'.format(self.path, self.name)


def user_directory_path(instance, filename):
    path = instance.file_info.path[1:] if instance.file_info.path.startswith('/') else instance.file_info.path
    return 'store/{0}/{1}/{2}'.format(path, instance.revision, filename)


class FileRevision(DateTimeModel):
    file_info = models.ForeignKey(File, on_delete=models.CASCADE, related_name="file_revision")
    file = models.FileField(upload_to=user_directory_path)
    full_path = models.CharField(max_length=255)
    revision = models.PositiveIntegerField(default=0)
    UniqueConstraint(fields=['file_info', 'revision'], name='unique_file_revision')

    def __unicode__(self):
        return '{} - {}'.format(self.full_path, self.revision)

    def __str__(self):
        return '{} - {}'.format(self.full_path, self.revision)
