"""Declare models for users app."""
from django.db import models


class File(models.Model):
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    path = models.CharField(max_length=255)
    extension = models.CharField(max_length=10)

    def __unicode__(self):
        return '{} - {}'.format(self.name, self.path)

    def __str__(self):
        return '{} - {}'.format(self.name, self.path)


class FileVersion(models.Model):
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    file = models.ForeignKey(
        File,
        on_delete=models.CASCADE,
        related_name="file_images"
    )
    image = models.FileField()

    def __unicode__(self):
        return '{} - {}'.format(self.name, self.path)

    def __str__(self):
        return '{} - {}'.format(self.name, self.path)
