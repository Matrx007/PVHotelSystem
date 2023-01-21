import random
from datetime import datetime, timedelta

def random_date(date1=datetime(1970,1,1), date2=datetime.now()):
    if date1 > date2:
        return (date2 + timedelta(
                seconds=random.randint(0, int((date1 - date2).total_seconds())))
               ).strftime('%x')
    else:
        return (date1 + timedelta(
                seconds=random.randint(0, int((date2 - date1).total_seconds())))
               ).strftime('%x')

def generate_random_dates(count=10):
    current_date = datetime.now()
    first_day_of_month = current_date.replace(day=1)
    last_day_of_month = current_date.replace(day=28) + timedelta(days=4)
    last_day_of_month -= timedelta(days=last_day_of_month.day)
    dates = set()
    while len(dates) < count:
        dates.add(random_date(first_day_of_month, last_day_of_month))
    return list(dates)

def generate_random_dates_excluding(exclude_range_start_date, exclude_range_end_date):
    return [d for d in generate_random_dates() if d < exclude_range_start_date or d > exclude_range_end_date]
    
ROOMS = [
    {
        "id": "1",
        "name": "Ühekohaline",
        "available": 4,
        "price": 40,
        "pictures": [
            "https://images.trvl-media.com/lodging/75000000/74250000/74242600/74242531/9b2b2d66.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
            "https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/5a476c74.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
            "https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/9c4ce050.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
        ],
        "bookedDates": generate_random_dates()
    },
    {
        "id": "2",
        "name": "Kahekohaline",
        "available": 5,
        "price": 75,
        "pictures": [
            "https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/1436d39c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
            "https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/bf3c0cbc.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
            "https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/79035584.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
        ],
        "bookedDates": generate_random_dates()
    },
    {
        "id": "3",
        "name": "Kahe voodiga",
        "available": 3,
        "price": 80,
        "pictures": [
            "https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/83c80c39.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
            "https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/917201ab.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
            "https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/c43c9335.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
        ],
        "bookedDates": generate_random_dates()
    },
    {
        "id": "4",
        "name": "Kolmekohaline",
        "available": 3,
        "price": 100,
        "pictures": [
            "https://images.trvl-media.com/lodging/75000000/74250000/74242600/74242531/1331f409.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
            "https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/42361b97.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
            "https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/11995beb.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
        ],
        "bookedDates": generate_random_dates()
    },
    {
        "id": "5",
        "name": "Sviit",
        "available": 1,
        "price": 150,
        "pictures": [
            "https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/9f0abbf8.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
            "https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/bcb18a26.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
            "https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/5dfe5424.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
            "https://images.trvl-media.com/hotels/75000000/74250000/74242600/74242531/f5bad581.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
        ],
        "bookedDates": generate_random_dates()
    }
];