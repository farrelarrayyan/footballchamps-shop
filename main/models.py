import uuid
from django.db import models

class Product(models.Model):
    CATEGORY_CHOICES = [
        ('footwear', 'Footwear'),
        ('accessories', 'Accessories'),
        ('supplements', 'Supplements'),
        ('jersey', 'Jersey'),
        ('ball', 'Ball'),
        ('other', 'Other')
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    price = models.IntegerField()
    stock = models.IntegerField()
    description = models.TextField()
    thumbnail = models.URLField(blank=True, null=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='other')
    is_popular = models.BooleanField(default=False) # modifikasi dari is_featured
    product_sold = models.PositiveIntegerField(default=0)
    
    def __str__(self):
        return self.name
    
    @property
    def is_product_popular(self):
        return self.product_sold > 50
        
    def increment_sale(self):
        self.product_sold += 1
        self.save()