from django.core.management.base import BaseCommand
from by.models import Category, Brand, Product, Banner


class Command(BaseCommand):
    help = 'Seed database with baby shop sample data'

    def handle(self, *args, **kwargs):
        self.stdout.write('Seeding data...')

        # Categories
        categories = {
            'boys-fashion': Category.objects.get_or_create(name='Boys fashion', slug='boys-fashion')[0],
            'girls-fashion': Category.objects.get_or_create(name='Girls fashion', slug='girls-fashion')[0],
            'footwear': Category.objects.get_or_create(name='Footwear', slug='footwear')[0],
            'accessories': Category.objects.get_or_create(name='Accessories', slug='accessories')[0],
            'toys': Category.objects.get_or_create(name='Toys', slug='toys')[0],
            'beds': Category.objects.get_or_create(name='Beds', slug='beds')[0],
        }
        self.stdout.write(self.style.SUCCESS(f'Created {len(categories)} categories'))

        # Brands
        brands = {
            'kidlon': Brand.objects.get_or_create(name='Kidlon')[0],
            'fancy-fluff': Brand.objects.get_or_create(name='Fancy Fluff')[0],
            'johnsons': Brand.objects.get_or_create(name="Johnson's Baby")[0],
            'pampers': Brand.objects.get_or_create(name='Pampers')[0],
            'babyhug': Brand.objects.get_or_create(name='Babyhug')[0],
            'babyoye': Brand.objects.get_or_create(name='Babyoye')[0],
        }
        self.stdout.write(self.style.SUCCESS(f'Created {len(brands)} brands'))

        # New Arrival Products
        new_arrivals = [
            {
                'name': 'Cotton Seersucker Frill Dress',
                'price': 2099,
                'category': categories['girls-fashion'],
                'brand': brands['babyhug'],
                'tag': 'new_arrival',
                'description': 'Beautiful cotton seersucker frill dress for baby girls. Soft, breathable fabric perfect for all seasons.',
            },
            {
                'name': 'Cute Walk by Babyhug',
                'price': 936,
                'category': categories['footwear'],
                'brand': brands['babyhug'],
                'tag': 'new_arrival',
                'description': 'Comfortable and stylish footwear for toddlers. Easy to wear with velcro straps.',
            },
            {
                'name': 'Babyoye Disney',
                'price': 590,
                'category': categories['toys'],
                'brand': brands['babyoye'],
                'tag': 'new_arrival',
                'description': 'Disney themed baby toy. Safe, non-toxic materials perfect for little hands.',
            },
            {
                'name': 'Bath Squeeze Toys',
                'price': 257,
                'category': categories['toys'],
                'brand': brands['kidlon'],
                'tag': 'new_arrival',
                'description': 'Fun and colorful bath squeeze toys. Makes bath time enjoyable for babies.',
            },
            {
                'name': 'Advanced Pant Style Diapers Extra Large (XL)',
                'price': 1185,
                'category': categories['accessories'],
                'brand': brands['pampers'],
                'tag': 'new_arrival',
                'description': 'Advanced pant style diapers with extra absorption. Comfortable fit for active babies.',
            },
            {
                'name': 'Comfy Ride Stroller With Reversible Handle',
                'price': 3180,
                'category': categories['accessories'],
                'brand': brands['babyhug'],
                'tag': 'new_arrival',
                'description': 'Comfortable ride stroller with reversible handle. Lightweight and easy to fold.',
            },
            {
                'name': 'Runway Cabin Stroller in Linen Fabric',
                'price': 9730,
                'category': categories['accessories'],
                'brand': brands['babyhug'],
                'tag': 'new_arrival',
                'description': 'Premium cabin stroller in linen fabric. Compact design perfect for travel.',
            },
            {
                'name': 'Cocoon Stroller Mosquito Net & Reversible Handle',
                'price': 3190,
                'category': categories['accessories'],
                'brand': brands['babyhug'],
                'tag': 'new_arrival',
                'description': 'Cocoon stroller with mosquito net and reversible handle. Full protection for your baby.',
            },
        ]

        for item in new_arrivals:
            Product.objects.get_or_create(
                name=item['name'],
                defaults=item,
            )
        self.stdout.write(self.style.SUCCESS(f'Created {len(new_arrivals)} new arrival products'))

        # Top Selling Products
        top_selling = [
            {
                'name': 'Cocoon Stroller Mosquito Net & Reversible Handle',
                'price': 3190,
                'category': categories['accessories'],
                'brand': brands['babyhug'],
                'tag': 'top_selling',
                'description': 'Best selling cocoon stroller with mosquito net. Parents love the reversible handle feature.',
            },
            {
                'name': 'Comfy Ride Stroller With Reversible Handle',
                'price': 3180,
                'category': categories['accessories'],
                'brand': brands['babyhug'],
                'tag': 'top_selling',
                'description': 'Top rated comfy ride stroller. Smooth wheels and comfortable seating.',
            },
            {
                'name': 'Cute Walk by Babyhug',
                'price': 936,
                'category': categories['footwear'],
                'brand': brands['babyhug'],
                'tag': 'top_selling',
                'description': 'Best selling baby footwear. Durable and comfortable for everyday wear.',
            },
            {
                'name': 'My Fun Dough Jumbo Return Gift Set Tub',
                'price': 599,
                'category': categories['toys'],
                'brand': brands['kidlon'],
                'tag': 'top_selling',
                'description': 'Fun dough jumbo set perfect for return gifts. Non-toxic and safe for kids.',
            },
        ]

        for item in top_selling:
            Product.objects.get_or_create(
                name=item['name'],
                defaults=item,
            )
        self.stdout.write(self.style.SUCCESS(f'Created {len(top_selling)} top selling products'))

        # Banners
        banners = [
            {
                'title': 'Baby beds & Accessories',
                'discount': 'Flat 30% Off',
                'link': '/category/beds',
                'is_active': True,
            },
            {
                'title': 'Baby Fashion Collection',
                'discount': 'Up to 50% Off',
                'link': '/category/girls-fashion',
                'is_active': True,
            },
        ]

        for item in banners:
            Banner.objects.get_or_create(
                title=item['title'],
                defaults=item,
            )
        self.stdout.write(self.style.SUCCESS(f'Created {len(banners)} banners'))

        self.stdout.write(self.style.SUCCESS('Seeding complete!'))
