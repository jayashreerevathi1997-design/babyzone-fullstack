from django.contrib import admin
from .models import Category, Brand, Product, Banner, CartItem


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ['name']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'category', 'brand', 'tag', 'in_stock', 'created_at']
    list_filter = ['category', 'brand', 'tag', 'in_stock']
    search_fields = ['name', 'description']


@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    list_display = ['title', 'discount', 'is_active']
    list_filter = ['is_active']


@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ['user', 'product', 'quantity', 'added_at']
