# Generated by Django 2.2.10 on 2020-02-16 21:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import file_manager.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='File',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('edited', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=255)),
                ('path', models.CharField(max_length=255)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='FileRevision',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('edited', models.DateTimeField(auto_now=True)),
                ('file', models.FileField(upload_to=file_manager.models.user_directory_path)),
                ('full_path', models.CharField(max_length=255)),
                ('revision', models.PositiveIntegerField(default=0)),
                ('file_info', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='file_revision', to='file_manager.File')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
